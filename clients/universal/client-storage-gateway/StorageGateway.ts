import { StorageGatewayClient } from "./StorageGatewayClient";
import { ActivateGatewayInput } from "./types/ActivateGatewayInput";
import { ActivateGatewayOutput } from "./types/ActivateGatewayOutput";
import { AddCacheInput } from "./types/AddCacheInput";
import { AddCacheOutput } from "./types/AddCacheOutput";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { AddUploadBufferInput } from "./types/AddUploadBufferInput";
import { AddUploadBufferOutput } from "./types/AddUploadBufferOutput";
import { AddWorkingStorageInput } from "./types/AddWorkingStorageInput";
import { AddWorkingStorageOutput } from "./types/AddWorkingStorageOutput";
import { AssignTapePoolInput } from "./types/AssignTapePoolInput";
import { AssignTapePoolOutput } from "./types/AssignTapePoolOutput";
import { AttachVolumeInput } from "./types/AttachVolumeInput";
import { AttachVolumeOutput } from "./types/AttachVolumeOutput";
import { CancelArchivalInput } from "./types/CancelArchivalInput";
import { CancelArchivalOutput } from "./types/CancelArchivalOutput";
import { CancelRetrievalInput } from "./types/CancelRetrievalInput";
import { CancelRetrievalOutput } from "./types/CancelRetrievalOutput";
import { CreateCachediSCSIVolumeInput } from "./types/CreateCachediSCSIVolumeInput";
import { CreateCachediSCSIVolumeOutput } from "./types/CreateCachediSCSIVolumeOutput";
import { CreateNFSFileShareInput } from "./types/CreateNFSFileShareInput";
import { CreateNFSFileShareOutput } from "./types/CreateNFSFileShareOutput";
import { CreateSMBFileShareInput } from "./types/CreateSMBFileShareInput";
import { CreateSMBFileShareOutput } from "./types/CreateSMBFileShareOutput";
import { CreateSnapshotFromVolumeRecoveryPointInput } from "./types/CreateSnapshotFromVolumeRecoveryPointInput";
import { CreateSnapshotFromVolumeRecoveryPointOutput } from "./types/CreateSnapshotFromVolumeRecoveryPointOutput";
import { CreateSnapshotInput } from "./types/CreateSnapshotInput";
import { CreateSnapshotOutput } from "./types/CreateSnapshotOutput";
import { CreateStorediSCSIVolumeInput } from "./types/CreateStorediSCSIVolumeInput";
import { CreateStorediSCSIVolumeOutput } from "./types/CreateStorediSCSIVolumeOutput";
import { CreateTapeWithBarcodeInput } from "./types/CreateTapeWithBarcodeInput";
import { CreateTapeWithBarcodeOutput } from "./types/CreateTapeWithBarcodeOutput";
import { CreateTapesInput } from "./types/CreateTapesInput";
import { CreateTapesOutput } from "./types/CreateTapesOutput";
import { DeleteBandwidthRateLimitInput } from "./types/DeleteBandwidthRateLimitInput";
import { DeleteBandwidthRateLimitOutput } from "./types/DeleteBandwidthRateLimitOutput";
import { DeleteChapCredentialsInput } from "./types/DeleteChapCredentialsInput";
import { DeleteChapCredentialsOutput } from "./types/DeleteChapCredentialsOutput";
import { DeleteFileShareInput } from "./types/DeleteFileShareInput";
import { DeleteFileShareOutput } from "./types/DeleteFileShareOutput";
import { DeleteGatewayInput } from "./types/DeleteGatewayInput";
import { DeleteGatewayOutput } from "./types/DeleteGatewayOutput";
import { DeleteSnapshotScheduleInput } from "./types/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "./types/DeleteSnapshotScheduleOutput";
import { DeleteTapeArchiveInput } from "./types/DeleteTapeArchiveInput";
import { DeleteTapeArchiveOutput } from "./types/DeleteTapeArchiveOutput";
import { DeleteTapeInput } from "./types/DeleteTapeInput";
import { DeleteTapeOutput } from "./types/DeleteTapeOutput";
import { DeleteVolumeInput } from "./types/DeleteVolumeInput";
import { DeleteVolumeOutput } from "./types/DeleteVolumeOutput";
import { DescribeBandwidthRateLimitInput } from "./types/DescribeBandwidthRateLimitInput";
import { DescribeBandwidthRateLimitOutput } from "./types/DescribeBandwidthRateLimitOutput";
import { DescribeCacheInput } from "./types/DescribeCacheInput";
import { DescribeCacheOutput } from "./types/DescribeCacheOutput";
import { DescribeCachediSCSIVolumesInput } from "./types/DescribeCachediSCSIVolumesInput";
import { DescribeCachediSCSIVolumesOutput } from "./types/DescribeCachediSCSIVolumesOutput";
import { DescribeChapCredentialsInput } from "./types/DescribeChapCredentialsInput";
import { DescribeChapCredentialsOutput } from "./types/DescribeChapCredentialsOutput";
import { DescribeGatewayInformationInput } from "./types/DescribeGatewayInformationInput";
import { DescribeGatewayInformationOutput } from "./types/DescribeGatewayInformationOutput";
import { DescribeMaintenanceStartTimeInput } from "./types/DescribeMaintenanceStartTimeInput";
import { DescribeMaintenanceStartTimeOutput } from "./types/DescribeMaintenanceStartTimeOutput";
import { DescribeNFSFileSharesInput } from "./types/DescribeNFSFileSharesInput";
import { DescribeNFSFileSharesOutput } from "./types/DescribeNFSFileSharesOutput";
import { DescribeSMBFileSharesInput } from "./types/DescribeSMBFileSharesInput";
import { DescribeSMBFileSharesOutput } from "./types/DescribeSMBFileSharesOutput";
import { DescribeSMBSettingsInput } from "./types/DescribeSMBSettingsInput";
import { DescribeSMBSettingsOutput } from "./types/DescribeSMBSettingsOutput";
import { DescribeSnapshotScheduleInput } from "./types/DescribeSnapshotScheduleInput";
import { DescribeSnapshotScheduleOutput } from "./types/DescribeSnapshotScheduleOutput";
import { DescribeStorediSCSIVolumesInput } from "./types/DescribeStorediSCSIVolumesInput";
import { DescribeStorediSCSIVolumesOutput } from "./types/DescribeStorediSCSIVolumesOutput";
import { DescribeTapeArchivesInput } from "./types/DescribeTapeArchivesInput";
import { DescribeTapeArchivesOutput } from "./types/DescribeTapeArchivesOutput";
import { DescribeTapeRecoveryPointsInput } from "./types/DescribeTapeRecoveryPointsInput";
import { DescribeTapeRecoveryPointsOutput } from "./types/DescribeTapeRecoveryPointsOutput";
import { DescribeTapesInput } from "./types/DescribeTapesInput";
import { DescribeTapesOutput } from "./types/DescribeTapesOutput";
import { DescribeUploadBufferInput } from "./types/DescribeUploadBufferInput";
import { DescribeUploadBufferOutput } from "./types/DescribeUploadBufferOutput";
import { DescribeVTLDevicesInput } from "./types/DescribeVTLDevicesInput";
import { DescribeVTLDevicesOutput } from "./types/DescribeVTLDevicesOutput";
import { DescribeWorkingStorageInput } from "./types/DescribeWorkingStorageInput";
import { DescribeWorkingStorageOutput } from "./types/DescribeWorkingStorageOutput";
import { DetachVolumeInput } from "./types/DetachVolumeInput";
import { DetachVolumeOutput } from "./types/DetachVolumeOutput";
import { DisableGatewayInput } from "./types/DisableGatewayInput";
import { DisableGatewayOutput } from "./types/DisableGatewayOutput";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidGatewayRequestException } from "./types/InvalidGatewayRequestException";
import { JoinDomainInput } from "./types/JoinDomainInput";
import { JoinDomainOutput } from "./types/JoinDomainOutput";
import { ListFileSharesInput } from "./types/ListFileSharesInput";
import { ListFileSharesOutput } from "./types/ListFileSharesOutput";
import { ListGatewaysInput } from "./types/ListGatewaysInput";
import { ListGatewaysOutput } from "./types/ListGatewaysOutput";
import { ListLocalDisksInput } from "./types/ListLocalDisksInput";
import { ListLocalDisksOutput } from "./types/ListLocalDisksOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTapesInput } from "./types/ListTapesInput";
import { ListTapesOutput } from "./types/ListTapesOutput";
import { ListVolumeInitiatorsInput } from "./types/ListVolumeInitiatorsInput";
import { ListVolumeInitiatorsOutput } from "./types/ListVolumeInitiatorsOutput";
import { ListVolumeRecoveryPointsInput } from "./types/ListVolumeRecoveryPointsInput";
import { ListVolumeRecoveryPointsOutput } from "./types/ListVolumeRecoveryPointsOutput";
import { ListVolumesInput } from "./types/ListVolumesInput";
import { ListVolumesOutput } from "./types/ListVolumesOutput";
import { NotifyWhenUploadedInput } from "./types/NotifyWhenUploadedInput";
import { NotifyWhenUploadedOutput } from "./types/NotifyWhenUploadedOutput";
import { RefreshCacheInput } from "./types/RefreshCacheInput";
import { RefreshCacheOutput } from "./types/RefreshCacheOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ResetCacheInput } from "./types/ResetCacheInput";
import { ResetCacheOutput } from "./types/ResetCacheOutput";
import { RetrieveTapeArchiveInput } from "./types/RetrieveTapeArchiveInput";
import { RetrieveTapeArchiveOutput } from "./types/RetrieveTapeArchiveOutput";
import { RetrieveTapeRecoveryPointInput } from "./types/RetrieveTapeRecoveryPointInput";
import { RetrieveTapeRecoveryPointOutput } from "./types/RetrieveTapeRecoveryPointOutput";
import { ServiceUnavailableError } from "./types/ServiceUnavailableError";
import { SetLocalConsolePasswordInput } from "./types/SetLocalConsolePasswordInput";
import { SetLocalConsolePasswordOutput } from "./types/SetLocalConsolePasswordOutput";
import { SetSMBGuestPasswordInput } from "./types/SetSMBGuestPasswordInput";
import { SetSMBGuestPasswordOutput } from "./types/SetSMBGuestPasswordOutput";
import { ShutdownGatewayInput } from "./types/ShutdownGatewayInput";
import { ShutdownGatewayOutput } from "./types/ShutdownGatewayOutput";
import { StartGatewayInput } from "./types/StartGatewayInput";
import { StartGatewayOutput } from "./types/StartGatewayOutput";
import { UpdateBandwidthRateLimitInput } from "./types/UpdateBandwidthRateLimitInput";
import { UpdateBandwidthRateLimitOutput } from "./types/UpdateBandwidthRateLimitOutput";
import { UpdateChapCredentialsInput } from "./types/UpdateChapCredentialsInput";
import { UpdateChapCredentialsOutput } from "./types/UpdateChapCredentialsOutput";
import { UpdateGatewayInformationInput } from "./types/UpdateGatewayInformationInput";
import { UpdateGatewayInformationOutput } from "./types/UpdateGatewayInformationOutput";
import { UpdateGatewaySoftwareNowInput } from "./types/UpdateGatewaySoftwareNowInput";
import { UpdateGatewaySoftwareNowOutput } from "./types/UpdateGatewaySoftwareNowOutput";
import { UpdateMaintenanceStartTimeInput } from "./types/UpdateMaintenanceStartTimeInput";
import { UpdateMaintenanceStartTimeOutput } from "./types/UpdateMaintenanceStartTimeOutput";
import { UpdateNFSFileShareInput } from "./types/UpdateNFSFileShareInput";
import { UpdateNFSFileShareOutput } from "./types/UpdateNFSFileShareOutput";
import { UpdateSMBFileShareInput } from "./types/UpdateSMBFileShareInput";
import { UpdateSMBFileShareOutput } from "./types/UpdateSMBFileShareOutput";
import { UpdateSMBSecurityStrategyInput } from "./types/UpdateSMBSecurityStrategyInput";
import { UpdateSMBSecurityStrategyOutput } from "./types/UpdateSMBSecurityStrategyOutput";
import { UpdateSnapshotScheduleInput } from "./types/UpdateSnapshotScheduleInput";
import { UpdateSnapshotScheduleOutput } from "./types/UpdateSnapshotScheduleOutput";
import { UpdateVTLDeviceTypeInput } from "./types/UpdateVTLDeviceTypeInput";
import { UpdateVTLDeviceTypeOutput } from "./types/UpdateVTLDeviceTypeOutput";
import { ActivateGatewayCommand } from "./commands/ActivateGatewayCommand";
import { AddCacheCommand } from "./commands/AddCacheCommand";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { AddUploadBufferCommand } from "./commands/AddUploadBufferCommand";
import { AddWorkingStorageCommand } from "./commands/AddWorkingStorageCommand";
import { AssignTapePoolCommand } from "./commands/AssignTapePoolCommand";
import { AttachVolumeCommand } from "./commands/AttachVolumeCommand";
import { CancelArchivalCommand } from "./commands/CancelArchivalCommand";
import { CancelRetrievalCommand } from "./commands/CancelRetrievalCommand";
import { CreateCachediSCSIVolumeCommand } from "./commands/CreateCachediSCSIVolumeCommand";
import { CreateNFSFileShareCommand } from "./commands/CreateNFSFileShareCommand";
import { CreateSMBFileShareCommand } from "./commands/CreateSMBFileShareCommand";
import { CreateSnapshotCommand } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotFromVolumeRecoveryPointCommand } from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import { CreateStorediSCSIVolumeCommand } from "./commands/CreateStorediSCSIVolumeCommand";
import { CreateTapeWithBarcodeCommand } from "./commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommand } from "./commands/CreateTapesCommand";
import { DeleteBandwidthRateLimitCommand } from "./commands/DeleteBandwidthRateLimitCommand";
import { DeleteChapCredentialsCommand } from "./commands/DeleteChapCredentialsCommand";
import { DeleteFileShareCommand } from "./commands/DeleteFileShareCommand";
import { DeleteGatewayCommand } from "./commands/DeleteGatewayCommand";
import { DeleteSnapshotScheduleCommand } from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTapeArchiveCommand } from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommand } from "./commands/DeleteTapeCommand";
import { DeleteVolumeCommand } from "./commands/DeleteVolumeCommand";
import { DescribeBandwidthRateLimitCommand } from "./commands/DescribeBandwidthRateLimitCommand";
import { DescribeCacheCommand } from "./commands/DescribeCacheCommand";
import { DescribeCachediSCSIVolumesCommand } from "./commands/DescribeCachediSCSIVolumesCommand";
import { DescribeChapCredentialsCommand } from "./commands/DescribeChapCredentialsCommand";
import { DescribeGatewayInformationCommand } from "./commands/DescribeGatewayInformationCommand";
import { DescribeMaintenanceStartTimeCommand } from "./commands/DescribeMaintenanceStartTimeCommand";
import { DescribeNFSFileSharesCommand } from "./commands/DescribeNFSFileSharesCommand";
import { DescribeSMBFileSharesCommand } from "./commands/DescribeSMBFileSharesCommand";
import { DescribeSMBSettingsCommand } from "./commands/DescribeSMBSettingsCommand";
import { DescribeSnapshotScheduleCommand } from "./commands/DescribeSnapshotScheduleCommand";
import { DescribeStorediSCSIVolumesCommand } from "./commands/DescribeStorediSCSIVolumesCommand";
import { DescribeTapeArchivesCommand } from "./commands/DescribeTapeArchivesCommand";
import { DescribeTapeRecoveryPointsCommand } from "./commands/DescribeTapeRecoveryPointsCommand";
import { DescribeTapesCommand } from "./commands/DescribeTapesCommand";
import { DescribeUploadBufferCommand } from "./commands/DescribeUploadBufferCommand";
import { DescribeVTLDevicesCommand } from "./commands/DescribeVTLDevicesCommand";
import { DescribeWorkingStorageCommand } from "./commands/DescribeWorkingStorageCommand";
import { DetachVolumeCommand } from "./commands/DetachVolumeCommand";
import { DisableGatewayCommand } from "./commands/DisableGatewayCommand";
import { JoinDomainCommand } from "./commands/JoinDomainCommand";
import { ListFileSharesCommand } from "./commands/ListFileSharesCommand";
import { ListGatewaysCommand } from "./commands/ListGatewaysCommand";
import { ListLocalDisksCommand } from "./commands/ListLocalDisksCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTapesCommand } from "./commands/ListTapesCommand";
import { ListVolumeInitiatorsCommand } from "./commands/ListVolumeInitiatorsCommand";
import { ListVolumeRecoveryPointsCommand } from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommand } from "./commands/ListVolumesCommand";
import { NotifyWhenUploadedCommand } from "./commands/NotifyWhenUploadedCommand";
import { RefreshCacheCommand } from "./commands/RefreshCacheCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommand } from "./commands/ResetCacheCommand";
import { RetrieveTapeArchiveCommand } from "./commands/RetrieveTapeArchiveCommand";
import { RetrieveTapeRecoveryPointCommand } from "./commands/RetrieveTapeRecoveryPointCommand";
import { SetLocalConsolePasswordCommand } from "./commands/SetLocalConsolePasswordCommand";
import { SetSMBGuestPasswordCommand } from "./commands/SetSMBGuestPasswordCommand";
import { ShutdownGatewayCommand } from "./commands/ShutdownGatewayCommand";
import { StartGatewayCommand } from "./commands/StartGatewayCommand";
import { UpdateBandwidthRateLimitCommand } from "./commands/UpdateBandwidthRateLimitCommand";
import { UpdateChapCredentialsCommand } from "./commands/UpdateChapCredentialsCommand";
import { UpdateGatewayInformationCommand } from "./commands/UpdateGatewayInformationCommand";
import { UpdateGatewaySoftwareNowCommand } from "./commands/UpdateGatewaySoftwareNowCommand";
import { UpdateMaintenanceStartTimeCommand } from "./commands/UpdateMaintenanceStartTimeCommand";
import { UpdateNFSFileShareCommand } from "./commands/UpdateNFSFileShareCommand";
import { UpdateSMBFileShareCommand } from "./commands/UpdateSMBFileShareCommand";
import { UpdateSMBSecurityStrategyCommand } from "./commands/UpdateSMBSecurityStrategyCommand";
import { UpdateSnapshotScheduleCommand } from "./commands/UpdateSnapshotScheduleCommand";
import { UpdateVTLDeviceTypeCommand } from "./commands/UpdateVTLDeviceTypeCommand";

export class StorageGateway extends StorageGatewayClient {
  /**
   * <p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the region you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public activateGateway(
    args: ActivateGatewayInput
  ): Promise<ActivateGatewayOutput>;
  public activateGateway(
    args: ActivateGatewayInput,
    cb: (err: any, data?: ActivateGatewayOutput) => void
  ): void;
  public activateGateway(
    args: ActivateGatewayInput,
    cb?: (err: any, data?: ActivateGatewayOutput) => void
  ): Promise<ActivateGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ActivateGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">Storage Gateway Concepts</a>).</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addCache(args: AddCacheInput): Promise<AddCacheOutput>;
  public addCache(
    args: AddCacheInput,
    cb: (err: any, data?: AddCacheOutput) => void
  ): void;
  public addCache(
    args: AddCacheInput,
    cb?: (err: any, data?: AddCacheOutput) => void
  ): Promise<AddCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> <li> <p>Storage volumes</p> </li> <li> <p>Virtual tapes</p> </li> <li> <p>NFS and SMB file shares</p> </li> </ul> <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addUploadBuffer(
    args: AddUploadBufferInput
  ): Promise<AddUploadBufferOutput>;
  public addUploadBuffer(
    args: AddUploadBufferInput,
    cb: (err: any, data?: AddUploadBufferOutput) => void
  ): void;
  public addUploadBuffer(
    args: AddUploadBufferInput,
    cb?: (err: any, data?: AddUploadBufferOutput) => void
  ): Promise<AddUploadBufferOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddUploadBufferCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addWorkingStorage(
    args: AddWorkingStorageInput
  ): Promise<AddWorkingStorageOutput>;
  public addWorkingStorage(
    args: AddWorkingStorageInput,
    cb: (err: any, data?: AddWorkingStorageOutput) => void
  ): void;
  public addWorkingStorage(
    args: AddWorkingStorageInput,
    cb?: (err: any, data?: AddWorkingStorageOutput) => void
  ): Promise<AddWorkingStorageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddWorkingStorageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (Glacier or Deep Archive) that corresponds to the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public assignTapePool(
    args: AssignTapePoolInput
  ): Promise<AssignTapePoolOutput>;
  public assignTapePool(
    args: AssignTapePoolInput,
    cb: (err: any, data?: AssignTapePoolOutput) => void
  ): void;
  public assignTapePool(
    args: AssignTapePoolInput,
    cb?: (err: any, data?: AssignTapePoolOutput) => void
  ): Promise<AssignTapePoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssignTapePoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachVolume(args: AttachVolumeInput): Promise<AttachVolumeOutput>;
  public attachVolume(
    args: AttachVolumeInput,
    cb: (err: any, data?: AttachVolumeOutput) => void
  ): void;
  public attachVolume(
    args: AttachVolumeInput,
    cb?: (err: any, data?: AttachVolumeOutput) => void
  ): Promise<AttachVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelArchival(
    args: CancelArchivalInput
  ): Promise<CancelArchivalOutput>;
  public cancelArchival(
    args: CancelArchivalInput,
    cb: (err: any, data?: CancelArchivalOutput) => void
  ): void;
  public cancelArchival(
    args: CancelArchivalInput,
    cb?: (err: any, data?: CancelArchivalOutput) => void
  ): Promise<CancelArchivalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelArchivalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelRetrieval(
    args: CancelRetrievalInput
  ): Promise<CancelRetrievalOutput>;
  public cancelRetrieval(
    args: CancelRetrievalInput,
    cb: (err: any, data?: CancelRetrievalOutput) => void
  ): void;
  public cancelRetrieval(
    args: CancelRetrievalInput,
    cb?: (err: any, data?: CancelRetrievalOutput) => void
  ): Promise<CancelRetrievalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelRetrievalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeInput
  ): Promise<CreateCachediSCSIVolumeOutput>;
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeInput,
    cb: (err: any, data?: CreateCachediSCSIVolumeOutput) => void
  ): void;
  public createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeInput,
    cb?: (err: any, data?: CreateCachediSCSIVolumeOutput) => void
  ): Promise<CreateCachediSCSIVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCachediSCSIVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Network File System (NFS) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using a NFS interface. This operation is only supported for file gateways.</p> <important> <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to enable you create a file share. Make sure AWS STS is activated in the region you are creating your file gateway in. If AWS STS is not activated in the region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide. </p> <p>File gateway does not support creating hard or symbolic links on a file share.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNFSFileShare(
    args: CreateNFSFileShareInput
  ): Promise<CreateNFSFileShareOutput>;
  public createNFSFileShare(
    args: CreateNFSFileShareInput,
    cb: (err: any, data?: CreateNFSFileShareOutput) => void
  ): void;
  public createNFSFileShare(
    args: CreateNFSFileShareInput,
    cb?: (err: any, data?: CreateNFSFileShareOutput) => void
  ): Promise<CreateNFSFileShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNFSFileShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway expose file shares using a SMB interface. This operation is only supported for file gateways.</p> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSMBFileShare(
    args: CreateSMBFileShareInput
  ): Promise<CreateSMBFileShareOutput>;
  public createSMBFileShare(
    args: CreateSMBFileShareInput,
    cb: (err: any, data?: CreateSMBFileShareOutput) => void
  ): void;
  public createSMBFileShare(
    args: CreateSMBFileShareInput,
    cb?: (err: any, data?: CreateSMBFileShareOutput) => void
  ): Promise<CreateSMBFileShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSMBFileShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a snapshot of a volume.</p> <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take ad-hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a Snapshot Schedule</a>.</p> <p>In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html">EC2 API reference</a>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {ServiceUnavailableError} <p>An internal server error has occurred because the service is unavailable. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshot(
    args: CreateSnapshotInput
  ): Promise<CreateSnapshotOutput>;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb: (err: any, data?: CreateSnapshotOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb?: (err: any, data?: CreateSnapshotOutput) => void
  ): Promise<CreateSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {ServiceUnavailableError} <p>An internal server error has occurred because the service is unavailable. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointInput
  ): Promise<CreateSnapshotFromVolumeRecoveryPointOutput>;
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointInput,
    cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointOutput) => void
  ): void;
  public createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointInput,
    cb?: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointOutput) => void
  ): Promise<CreateSnapshotFromVolumeRecoveryPointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotFromVolumeRecoveryPointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeInput
  ): Promise<CreateStorediSCSIVolumeOutput>;
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeInput,
    cb: (err: any, data?: CreateStorediSCSIVolumeOutput) => void
  ): void;
  public createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeInput,
    cb?: (err: any, data?: CreateStorediSCSIVolumeOutput) => void
  ): Promise<CreateStorediSCSIVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStorediSCSIVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and can not be reused if it has already been used on a tape . This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeInput
  ): Promise<CreateTapeWithBarcodeOutput>;
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeInput,
    cb: (err: any, data?: CreateTapeWithBarcodeOutput) => void
  ): void;
  public createTapeWithBarcode(
    args: CreateTapeWithBarcodeInput,
    cb?: (err: any, data?: CreateTapeWithBarcodeOutput) => void
  ): Promise<CreateTapeWithBarcodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTapeWithBarcodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTapes(args: CreateTapesInput): Promise<CreateTapesOutput>;
  public createTapes(
    args: CreateTapesInput,
    cb: (err: any, data?: CreateTapesOutput) => void
  ): void;
  public createTapes(
    args: CreateTapesInput,
    cb?: (err: any, data?: CreateTapesOutput) => void
  ): Promise<CreateTapesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTapesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitInput
  ): Promise<DeleteBandwidthRateLimitOutput>;
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitInput,
    cb: (err: any, data?: DeleteBandwidthRateLimitOutput) => void
  ): void;
  public deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitInput,
    cb?: (err: any, data?: DeleteBandwidthRateLimitOutput) => void
  ): Promise<DeleteBandwidthRateLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBandwidthRateLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteChapCredentials(
    args: DeleteChapCredentialsInput
  ): Promise<DeleteChapCredentialsOutput>;
  public deleteChapCredentials(
    args: DeleteChapCredentialsInput,
    cb: (err: any, data?: DeleteChapCredentialsOutput) => void
  ): void;
  public deleteChapCredentials(
    args: DeleteChapCredentialsInput,
    cb?: (err: any, data?: DeleteChapCredentialsOutput) => void
  ): Promise<DeleteChapCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteChapCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a file share from a file gateway. This operation is only supported for file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFileShare(
    args: DeleteFileShareInput
  ): Promise<DeleteFileShareOutput>;
  public deleteFileShare(
    args: DeleteFileShareInput,
    cb: (err: any, data?: DeleteFileShareOutput) => void
  ): void;
  public deleteFileShare(
    args: DeleteFileShareInput,
    cb?: (err: any, data?: DeleteFileShareOutput) => void
  ): Promise<DeleteFileShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFileShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway"> AWS Storage Gateway Detail Page</a>. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGateway(args: DeleteGatewayInput): Promise<DeleteGatewayOutput>;
  public deleteGateway(
    args: DeleteGatewayInput,
    cb: (err: any, data?: DeleteGatewayOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayInput,
    cb?: (err: any, data?: DeleteGatewayOutput) => void
  ): Promise<DeleteGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html">Working with Snapshots</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported in stored and cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput
  ): Promise<DeleteSnapshotScheduleOutput>;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput,
    cb: (err: any, data?: DeleteSnapshotScheduleOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput,
    cb?: (err: any, data?: DeleteSnapshotScheduleOutput) => void
  ): Promise<DeleteSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified virtual tape. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTape(args: DeleteTapeInput): Promise<DeleteTapeOutput>;
  public deleteTape(
    args: DeleteTapeInput,
    cb: (err: any, data?: DeleteTapeOutput) => void
  ): void;
  public deleteTape(
    args: DeleteTapeInput,
    cb?: (err: any, data?: DeleteTapeOutput) => void
  ): Promise<DeleteTapeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTapeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTapeArchive(
    args: DeleteTapeArchiveInput
  ): Promise<DeleteTapeArchiveOutput>;
  public deleteTapeArchive(
    args: DeleteTapeArchiveInput,
    cb: (err: any, data?: DeleteTapeArchiveOutput) => void
  ): void;
  public deleteTapeArchive(
    args: DeleteTapeArchiveInput,
    cb?: (err: any, data?: DeleteTapeArchiveOutput) => void
  ): Promise<DeleteTapeArchiveOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTapeArchiveCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. </p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVolume(args: DeleteVolumeInput): Promise<DeleteVolumeOutput>;
  public deleteVolume(
    args: DeleteVolumeInput,
    cb: (err: any, data?: DeleteVolumeOutput) => void
  ): void;
  public deleteVolume(
    args: DeleteVolumeInput,
    cb?: (err: any, data?: DeleteVolumeOutput) => void
  ): Promise<DeleteVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect.</p> <p>This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitInput
  ): Promise<DescribeBandwidthRateLimitOutput>;
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitInput,
    cb: (err: any, data?: DescribeBandwidthRateLimitOutput) => void
  ): void;
  public describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitInput,
    cb?: (err: any, data?: DescribeBandwidthRateLimitOutput) => void
  ): Promise<DescribeBandwidthRateLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBandwidthRateLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCache(args: DescribeCacheInput): Promise<DescribeCacheOutput>;
  public describeCache(
    args: DescribeCacheInput,
    cb: (err: any, data?: DescribeCacheOutput) => void
  ): void;
  public describeCache(
    args: DescribeCacheInput,
    cb?: (err: any, data?: DescribeCacheOutput) => void
  ): Promise<DescribeCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesInput
  ): Promise<DescribeCachediSCSIVolumesOutput>;
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesInput,
    cb: (err: any, data?: DescribeCachediSCSIVolumesOutput) => void
  ): void;
  public describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesInput,
    cb?: (err: any, data?: DescribeCachediSCSIVolumesOutput) => void
  ): Promise<DescribeCachediSCSIVolumesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCachediSCSIVolumesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeChapCredentials(
    args: DescribeChapCredentialsInput
  ): Promise<DescribeChapCredentialsOutput>;
  public describeChapCredentials(
    args: DescribeChapCredentialsInput,
    cb: (err: any, data?: DescribeChapCredentialsOutput) => void
  ): void;
  public describeChapCredentials(
    args: DescribeChapCredentialsInput,
    cb?: (err: any, data?: DescribeChapCredentialsOutput) => void
  ): Promise<DescribeChapCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeChapCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGatewayInformation(
    args: DescribeGatewayInformationInput
  ): Promise<DescribeGatewayInformationOutput>;
  public describeGatewayInformation(
    args: DescribeGatewayInformationInput,
    cb: (err: any, data?: DescribeGatewayInformationOutput) => void
  ): void;
  public describeGatewayInformation(
    args: DescribeGatewayInformationInput,
    cb?: (err: any, data?: DescribeGatewayInformationOutput) => void
  ): Promise<DescribeGatewayInformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGatewayInformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeInput
  ): Promise<DescribeMaintenanceStartTimeOutput>;
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeInput,
    cb: (err: any, data?: DescribeMaintenanceStartTimeOutput) => void
  ): void;
  public describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeInput,
    cb?: (err: any, data?: DescribeMaintenanceStartTimeOutput) => void
  ): Promise<DescribeMaintenanceStartTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceStartTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a description for one or more Network File System (NFS) file shares from a file gateway. This operation is only supported for file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNFSFileShares(
    args: DescribeNFSFileSharesInput
  ): Promise<DescribeNFSFileSharesOutput>;
  public describeNFSFileShares(
    args: DescribeNFSFileSharesInput,
    cb: (err: any, data?: DescribeNFSFileSharesOutput) => void
  ): void;
  public describeNFSFileShares(
    args: DescribeNFSFileSharesInput,
    cb?: (err: any, data?: DescribeNFSFileSharesOutput) => void
  ): Promise<DescribeNFSFileSharesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNFSFileSharesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a description for one or more Server Message Block (SMB) file shares from a file gateway. This operation is only supported for file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSMBFileShares(
    args: DescribeSMBFileSharesInput
  ): Promise<DescribeSMBFileSharesOutput>;
  public describeSMBFileShares(
    args: DescribeSMBFileSharesInput,
    cb: (err: any, data?: DescribeSMBFileSharesOutput) => void
  ): void;
  public describeSMBFileShares(
    args: DescribeSMBFileSharesInput,
    cb?: (err: any, data?: DescribeSMBFileSharesOutput) => void
  ): Promise<DescribeSMBFileSharesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSMBFileSharesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSMBSettings(
    args: DescribeSMBSettingsInput
  ): Promise<DescribeSMBSettingsOutput>;
  public describeSMBSettings(
    args: DescribeSMBSettingsInput,
    cb: (err: any, data?: DescribeSMBSettingsOutput) => void
  ): void;
  public describeSMBSettings(
    args: DescribeSMBSettingsInput,
    cb?: (err: any, data?: DescribeSMBSettingsOutput) => void
  ): Promise<DescribeSMBSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSMBSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleInput
  ): Promise<DescribeSnapshotScheduleOutput>;
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleInput,
    cb: (err: any, data?: DescribeSnapshotScheduleOutput) => void
  ): void;
  public describeSnapshotSchedule(
    args: DescribeSnapshotScheduleInput,
    cb?: (err: any, data?: DescribeSnapshotScheduleOutput) => void
  ): Promise<DescribeSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesInput
  ): Promise<DescribeStorediSCSIVolumesOutput>;
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesInput,
    cb: (err: any, data?: DescribeStorediSCSIVolumesOutput) => void
  ): void;
  public describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesInput,
    cb?: (err: any, data?: DescribeStorediSCSIVolumesOutput) => void
  ): Promise<DescribeStorediSCSIVolumesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStorediSCSIVolumesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTapeArchives(
    args: DescribeTapeArchivesInput
  ): Promise<DescribeTapeArchivesOutput>;
  public describeTapeArchives(
    args: DescribeTapeArchivesInput,
    cb: (err: any, data?: DescribeTapeArchivesOutput) => void
  ): void;
  public describeTapeArchives(
    args: DescribeTapeArchivesInput,
    cb?: (err: any, data?: DescribeTapeArchivesOutput) => void
  ): Promise<DescribeTapeArchivesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTapeArchivesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsInput
  ): Promise<DescribeTapeRecoveryPointsOutput>;
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsInput,
    cb: (err: any, data?: DescribeTapeRecoveryPointsOutput) => void
  ): void;
  public describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsInput,
    cb?: (err: any, data?: DescribeTapeRecoveryPointsOutput) => void
  ): Promise<DescribeTapeRecoveryPointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTapeRecoveryPointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTapes(args: DescribeTapesInput): Promise<DescribeTapesOutput>;
  public describeTapes(
    args: DescribeTapesInput,
    cb: (err: any, data?: DescribeTapesOutput) => void
  ): void;
  public describeTapes(
    args: DescribeTapesInput,
    cb?: (err: any, data?: DescribeTapesOutput) => void
  ): Promise<DescribeTapesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTapesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUploadBuffer(
    args: DescribeUploadBufferInput
  ): Promise<DescribeUploadBufferOutput>;
  public describeUploadBuffer(
    args: DescribeUploadBufferInput,
    cb: (err: any, data?: DescribeUploadBufferOutput) => void
  ): void;
  public describeUploadBuffer(
    args: DescribeUploadBufferInput,
    cb?: (err: any, data?: DescribeUploadBufferOutput) => void
  ): Promise<DescribeUploadBufferOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUploadBufferCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVTLDevices(
    args: DescribeVTLDevicesInput
  ): Promise<DescribeVTLDevicesOutput>;
  public describeVTLDevices(
    args: DescribeVTLDevicesInput,
    cb: (err: any, data?: DescribeVTLDevicesOutput) => void
  ): void;
  public describeVTLDevices(
    args: DescribeVTLDevicesInput,
    cb?: (err: any, data?: DescribeVTLDevicesOutput) => void
  ): Promise<DescribeVTLDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVTLDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkingStorage(
    args: DescribeWorkingStorageInput
  ): Promise<DescribeWorkingStorageOutput>;
  public describeWorkingStorage(
    args: DescribeWorkingStorageInput,
    cb: (err: any, data?: DescribeWorkingStorageOutput) => void
  ): void;
  public describeWorkingStorage(
    args: DescribeWorkingStorageInput,
    cb?: (err: any, data?: DescribeWorkingStorageOutput) => void
  ): Promise<DescribeWorkingStorageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkingStorageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachVolume(args: DetachVolumeInput): Promise<DetachVolumeOutput>;
  public detachVolume(
    args: DetachVolumeInput,
    cb: (err: any, data?: DetachVolumeOutput) => void
  ): void;
  public detachVolume(
    args: DetachVolumeInput,
    cb?: (err: any, data?: DetachVolumeOutput) => void
  ): Promise<DetachVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>Once a gateway is disabled it cannot be enabled.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableGateway(
    args: DisableGatewayInput
  ): Promise<DisableGatewayOutput>;
  public disableGateway(
    args: DisableGatewayInput,
    cb: (err: any, data?: DisableGatewayOutput) => void
  ): void;
  public disableGateway(
    args: DisableGatewayInput,
    cb?: (err: any, data?: DisableGatewayOutput) => void
  ): Promise<DisableGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public joinDomain(args: JoinDomainInput): Promise<JoinDomainOutput>;
  public joinDomain(
    args: JoinDomainInput,
    cb: (err: any, data?: JoinDomainOutput) => void
  ): void;
  public joinDomain(
    args: JoinDomainInput,
    cb?: (err: any, data?: JoinDomainOutput) => void
  ): Promise<JoinDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new JoinDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported for file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFileShares(
    args: ListFileSharesInput
  ): Promise<ListFileSharesOutput>;
  public listFileShares(
    args: ListFileSharesInput,
    cb: (err: any, data?: ListFileSharesOutput) => void
  ): void;
  public listFileShares(
    args: ListFileSharesInput,
    cb?: (err: any, data?: ListFileSharesOutput) => void
  ): Promise<ListFileSharesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFileSharesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGateways(args: ListGatewaysInput): Promise<ListGatewaysOutput>;
  public listGateways(
    args: ListGatewaysInput,
    cb: (err: any, data?: ListGatewaysOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysInput,
    cb?: (err: any, data?: ListGatewaysOutput) => void
  ): Promise<ListGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLocalDisks(
    args: ListLocalDisksInput
  ): Promise<ListLocalDisksOutput>;
  public listLocalDisks(
    args: ListLocalDisksInput,
    cb: (err: any, data?: ListLocalDisksOutput) => void
  ): void;
  public listLocalDisks(
    args: ListLocalDisksInput,
    cb?: (err: any, data?: ListLocalDisksOutput) => void
  ): Promise<ListLocalDisksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLocalDisksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that have been added to the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTapes(args: ListTapesInput): Promise<ListTapesOutput>;
  public listTapes(
    args: ListTapesInput,
    cb: (err: any, data?: ListTapesOutput) => void
  ): void;
  public listTapes(
    args: ListTapesInput,
    cb?: (err: any, data?: ListTapesOutput) => void
  ): Promise<ListTapesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTapesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVolumeInitiators(
    args: ListVolumeInitiatorsInput
  ): Promise<ListVolumeInitiatorsOutput>;
  public listVolumeInitiators(
    args: ListVolumeInitiatorsInput,
    cb: (err: any, data?: ListVolumeInitiatorsOutput) => void
  ): void;
  public listVolumeInitiators(
    args: ListVolumeInitiatorsInput,
    cb?: (err: any, data?: ListVolumeInitiatorsOutput) => void
  ): Promise<ListVolumeInitiatorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVolumeInitiatorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsInput
  ): Promise<ListVolumeRecoveryPointsOutput>;
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsInput,
    cb: (err: any, data?: ListVolumeRecoveryPointsOutput) => void
  ): void;
  public listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsInput,
    cb?: (err: any, data?: ListVolumeRecoveryPointsOutput) => void
  ): Promise<ListVolumeRecoveryPointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVolumeRecoveryPointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVolumes(args: ListVolumesInput): Promise<ListVolumesOutput>;
  public listVolumes(
    args: ListVolumesInput,
    cb: (err: any, data?: ListVolumesOutput) => void
  ): void;
  public listVolumes(
    args: ListVolumesInput,
    cb?: (err: any, data?: ListVolumesOutput) => void
  ): Promise<ListVolumesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVolumesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends you notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3.</p> <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the NFS file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or AWS Lambda function. This operation is only supported for file gateways.</p> <p>For more information, see Getting File Upload Notification in the Storage Gateway User Guide (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification). </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public notifyWhenUploaded(
    args: NotifyWhenUploadedInput
  ): Promise<NotifyWhenUploadedOutput>;
  public notifyWhenUploaded(
    args: NotifyWhenUploadedInput,
    cb: (err: any, data?: NotifyWhenUploadedOutput) => void
  ): void;
  public notifyWhenUploaded(
    args: NotifyWhenUploadedInput,
    cb?: (err: any, data?: NotifyWhenUploadedOutput) => void
  ): Promise<NotifyWhenUploadedOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new NotifyWhenUploadedCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed or replaced since the gateway last listed the bucket's contents and cached the results. This operation is only supported in the file gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting Notified About File Operations</a>.</p> <p>When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through an CloudWatch event when your <code>RefreshCache</code> operation completes. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public refreshCache(args: RefreshCacheInput): Promise<RefreshCacheOutput>;
  public refreshCache(
    args: RefreshCacheInput,
    cb: (err: any, data?: RefreshCacheOutput) => void
  ): void;
  public refreshCache(
    args: RefreshCacheInput,
    cb?: (err: any, data?: RefreshCacheOutput) => void
  ): Promise<RefreshCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RefreshCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters a error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetCache(args: ResetCacheInput): Promise<ResetCacheOutput>;
  public resetCache(
    args: ResetCacheInput,
    cb: (err: any, data?: ResetCacheOutput) => void
  ): void;
  public resetCache(
    args: ResetCacheInput,
    cb?: (err: any, data?: ResetCacheOutput) => void
  ): Promise<ResetCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveInput
  ): Promise<RetrieveTapeArchiveOutput>;
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveInput,
    cb: (err: any, data?: RetrieveTapeArchiveOutput) => void
  ): void;
  public retrieveTapeArchive(
    args: RetrieveTapeArchiveInput,
    cb?: (err: any, data?: RetrieveTapeArchiveOutput) => void
  ): Promise<RetrieveTapeArchiveOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RetrieveTapeArchiveCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointInput
  ): Promise<RetrieveTapeRecoveryPointOutput>;
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointInput,
    cb: (err: any, data?: RetrieveTapeRecoveryPointOutput) => void
  ): void;
  public retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointInput,
    cb?: (err: any, data?: RetrieveTapeRecoveryPointOutput) => void
  ): Promise<RetrieveTapeRecoveryPointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RetrieveTapeRecoveryPointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordInput
  ): Promise<SetLocalConsolePasswordOutput>;
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordInput,
    cb: (err: any, data?: SetLocalConsolePasswordOutput) => void
  ): void;
  public setLocalConsolePassword(
    args: SetLocalConsolePasswordInput,
    cb?: (err: any, data?: SetLocalConsolePasswordOutput) => void
  ): Promise<SetLocalConsolePasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLocalConsolePasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordInput
  ): Promise<SetSMBGuestPasswordOutput>;
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordInput,
    cb: (err: any, data?: SetSMBGuestPasswordOutput) => void
  ): void;
  public setSMBGuestPassword(
    args: SetSMBGuestPasswordInput,
    cb?: (err: any, data?: SetSMBGuestPasswordOutput) => void
  ): Promise<SetSMBGuestPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSMBGuestPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public shutdownGateway(
    args: ShutdownGatewayInput
  ): Promise<ShutdownGatewayOutput>;
  public shutdownGateway(
    args: ShutdownGatewayInput,
    cb: (err: any, data?: ShutdownGatewayOutput) => void
  ): void;
  public shutdownGateway(
    args: ShutdownGatewayInput,
    cb?: (err: any, data?: ShutdownGatewayOutput) => void
  ): Promise<ShutdownGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ShutdownGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startGateway(args: StartGatewayInput): Promise<StartGatewayOutput>;
  public startGateway(
    args: StartGatewayInput,
    cb: (err: any, data?: StartGatewayOutput) => void
  ): void;
  public startGateway(
    args: StartGatewayInput,
    cb?: (err: any, data?: StartGatewayOutput) => void
  ): Promise<StartGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitInput
  ): Promise<UpdateBandwidthRateLimitOutput>;
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitInput,
    cb: (err: any, data?: UpdateBandwidthRateLimitOutput) => void
  ): void;
  public updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitInput,
    cb?: (err: any, data?: UpdateBandwidthRateLimitOutput) => void
  ): Promise<UpdateBandwidthRateLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBandwidthRateLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateChapCredentials(
    args: UpdateChapCredentialsInput
  ): Promise<UpdateChapCredentialsOutput>;
  public updateChapCredentials(
    args: UpdateChapCredentialsInput,
    cb: (err: any, data?: UpdateChapCredentialsOutput) => void
  ): void;
  public updateChapCredentials(
    args: UpdateChapCredentialsInput,
    cb?: (err: any, data?: UpdateChapCredentialsOutput) => void
  ): Promise<UpdateChapCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateChapCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGatewayInformation(
    args: UpdateGatewayInformationInput
  ): Promise<UpdateGatewayInformationOutput>;
  public updateGatewayInformation(
    args: UpdateGatewayInformationInput,
    cb: (err: any, data?: UpdateGatewayInformationOutput) => void
  ): void;
  public updateGatewayInformation(
    args: UpdateGatewayInformationInput,
    cb?: (err: any, data?: UpdateGatewayInformationOutput) => void
  ): Promise<UpdateGatewayInformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGatewayInformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing Your Windows iSCSI Settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing Your Linux iSCSI Settings</a>, respectively.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowInput
  ): Promise<UpdateGatewaySoftwareNowOutput>;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowOutput) => void
  ): void;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowInput,
    cb?: (err: any, data?: UpdateGatewaySoftwareNowOutput) => void
  ): Promise<UpdateGatewaySoftwareNowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGatewaySoftwareNowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeInput
  ): Promise<UpdateMaintenanceStartTimeOutput>;
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeInput,
    cb: (err: any, data?: UpdateMaintenanceStartTimeOutput) => void
  ): void;
  public updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeInput,
    cb?: (err: any, data?: UpdateMaintenanceStartTimeOutput) => void
  ): Promise<UpdateMaintenanceStartTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMaintenanceStartTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a Network File System (NFS) file share. This operation is only supported in the file gateway type.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share setting:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported in file gateways.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNFSFileShare(
    args: UpdateNFSFileShareInput
  ): Promise<UpdateNFSFileShareOutput>;
  public updateNFSFileShare(
    args: UpdateNFSFileShareInput,
    cb: (err: any, data?: UpdateNFSFileShareOutput) => void
  ): void;
  public updateNFSFileShare(
    args: UpdateNFSFileShareInput,
    cb?: (err: any, data?: UpdateNFSFileShareOutput) => void
  ): Promise<UpdateNFSFileShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNFSFileShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a Server Message Block (SMB) file share.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported for file gateways.</p> </note> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSMBFileShare(
    args: UpdateSMBFileShareInput
  ): Promise<UpdateSMBFileShareOutput>;
  public updateSMBFileShare(
    args: UpdateSMBFileShareInput,
    cb: (err: any, data?: UpdateSMBFileShareOutput) => void
  ): void;
  public updateSMBFileShare(
    args: UpdateSMBFileShareInput,
    cb?: (err: any, data?: UpdateSMBFileShareOutput) => void
  ): Promise<UpdateSMBFileShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSMBFileShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyInput
  ): Promise<UpdateSMBSecurityStrategyOutput>;
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyInput,
    cb: (err: any, data?: UpdateSMBSecurityStrategyOutput) => void
  ): void;
  public updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyInput,
    cb?: (err: any, data?: UpdateSMBSecurityStrategyOutput) => void
  ): Promise<UpdateSMBSecurityStrategyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSMBSecurityStrategyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleInput
  ): Promise<UpdateSnapshotScheduleOutput>;
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleInput,
    cb: (err: any, data?: UpdateSnapshotScheduleOutput) => void
  ): void;
  public updateSnapshotSchedule(
    args: UpdateSnapshotScheduleInput,
    cb?: (err: any, data?: UpdateSnapshotScheduleOutput) => void
  ): Promise<UpdateSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidGatewayRequestException} <p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>
   *   - {InternalServerError} <p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeInput
  ): Promise<UpdateVTLDeviceTypeOutput>;
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeInput,
    cb: (err: any, data?: UpdateVTLDeviceTypeOutput) => void
  ): void;
  public updateVTLDeviceType(
    args: UpdateVTLDeviceTypeInput,
    cb?: (err: any, data?: UpdateVTLDeviceTypeOutput) => void
  ): Promise<UpdateVTLDeviceTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVTLDeviceTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
