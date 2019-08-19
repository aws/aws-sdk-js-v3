import { ActivateGatewayInput } from "./ActivateGatewayInput";
import { AddCacheInput } from "./AddCacheInput";
import { AddTagsToResourceInput } from "./AddTagsToResourceInput";
import { AddUploadBufferInput } from "./AddUploadBufferInput";
import { AddWorkingStorageInput } from "./AddWorkingStorageInput";
import { AssignTapePoolInput } from "./AssignTapePoolInput";
import { AttachVolumeInput } from "./AttachVolumeInput";
import { CancelArchivalInput } from "./CancelArchivalInput";
import { CancelRetrievalInput } from "./CancelRetrievalInput";
import { CreateCachediSCSIVolumeInput } from "./CreateCachediSCSIVolumeInput";
import { CreateNFSFileShareInput } from "./CreateNFSFileShareInput";
import { CreateSMBFileShareInput } from "./CreateSMBFileShareInput";
import { CreateSnapshotInput } from "./CreateSnapshotInput";
import { CreateSnapshotFromVolumeRecoveryPointInput } from "./CreateSnapshotFromVolumeRecoveryPointInput";
import { CreateStorediSCSIVolumeInput } from "./CreateStorediSCSIVolumeInput";
import { CreateTapeWithBarcodeInput } from "./CreateTapeWithBarcodeInput";
import { CreateTapesInput } from "./CreateTapesInput";
import { DeleteBandwidthRateLimitInput } from "./DeleteBandwidthRateLimitInput";
import { DeleteChapCredentialsInput } from "./DeleteChapCredentialsInput";
import { DeleteFileShareInput } from "./DeleteFileShareInput";
import { DeleteGatewayInput } from "./DeleteGatewayInput";
import { DeleteSnapshotScheduleInput } from "./DeleteSnapshotScheduleInput";
import { DeleteTapeInput } from "./DeleteTapeInput";
import { DeleteTapeArchiveInput } from "./DeleteTapeArchiveInput";
import { DeleteVolumeInput } from "./DeleteVolumeInput";
import { DescribeBandwidthRateLimitInput } from "./DescribeBandwidthRateLimitInput";
import { DescribeCacheInput } from "./DescribeCacheInput";
import { DescribeCachediSCSIVolumesInput } from "./DescribeCachediSCSIVolumesInput";
import { DescribeChapCredentialsInput } from "./DescribeChapCredentialsInput";
import { DescribeGatewayInformationInput } from "./DescribeGatewayInformationInput";
import { DescribeMaintenanceStartTimeInput } from "./DescribeMaintenanceStartTimeInput";
import { DescribeNFSFileSharesInput } from "./DescribeNFSFileSharesInput";
import { DescribeSMBFileSharesInput } from "./DescribeSMBFileSharesInput";
import { DescribeSMBSettingsInput } from "./DescribeSMBSettingsInput";
import { DescribeSnapshotScheduleInput } from "./DescribeSnapshotScheduleInput";
import { DescribeStorediSCSIVolumesInput } from "./DescribeStorediSCSIVolumesInput";
import { DescribeTapeArchivesInput } from "./DescribeTapeArchivesInput";
import { DescribeTapeRecoveryPointsInput } from "./DescribeTapeRecoveryPointsInput";
import { DescribeTapesInput } from "./DescribeTapesInput";
import { DescribeUploadBufferInput } from "./DescribeUploadBufferInput";
import { DescribeVTLDevicesInput } from "./DescribeVTLDevicesInput";
import { DescribeWorkingStorageInput } from "./DescribeWorkingStorageInput";
import { DetachVolumeInput } from "./DetachVolumeInput";
import { DisableGatewayInput } from "./DisableGatewayInput";
import { JoinDomainInput } from "./JoinDomainInput";
import { ListFileSharesInput } from "./ListFileSharesInput";
import { ListGatewaysInput } from "./ListGatewaysInput";
import { ListLocalDisksInput } from "./ListLocalDisksInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTapesInput } from "./ListTapesInput";
import { ListVolumeInitiatorsInput } from "./ListVolumeInitiatorsInput";
import { ListVolumeRecoveryPointsInput } from "./ListVolumeRecoveryPointsInput";
import { ListVolumesInput } from "./ListVolumesInput";
import { NotifyWhenUploadedInput } from "./NotifyWhenUploadedInput";
import { RefreshCacheInput } from "./RefreshCacheInput";
import { RemoveTagsFromResourceInput } from "./RemoveTagsFromResourceInput";
import { ResetCacheInput } from "./ResetCacheInput";
import { RetrieveTapeArchiveInput } from "./RetrieveTapeArchiveInput";
import { RetrieveTapeRecoveryPointInput } from "./RetrieveTapeRecoveryPointInput";
import { SetLocalConsolePasswordInput } from "./SetLocalConsolePasswordInput";
import { SetSMBGuestPasswordInput } from "./SetSMBGuestPasswordInput";
import { ShutdownGatewayInput } from "./ShutdownGatewayInput";
import { StartGatewayInput } from "./StartGatewayInput";
import { UpdateBandwidthRateLimitInput } from "./UpdateBandwidthRateLimitInput";
import { UpdateChapCredentialsInput } from "./UpdateChapCredentialsInput";
import { UpdateGatewayInformationInput } from "./UpdateGatewayInformationInput";
import { UpdateGatewaySoftwareNowInput } from "./UpdateGatewaySoftwareNowInput";
import { UpdateMaintenanceStartTimeInput } from "./UpdateMaintenanceStartTimeInput";
import { UpdateNFSFileShareInput } from "./UpdateNFSFileShareInput";
import { UpdateSMBFileShareInput } from "./UpdateSMBFileShareInput";
import { UpdateSMBSecurityStrategyInput } from "./UpdateSMBSecurityStrategyInput";
import { UpdateSnapshotScheduleInput } from "./UpdateSnapshotScheduleInput";
import { UpdateVTLDeviceTypeInput } from "./UpdateVTLDeviceTypeInput";
export type InputTypesUnion =
  | ActivateGatewayInput
  | AddCacheInput
  | AddTagsToResourceInput
  | AddUploadBufferInput
  | AddWorkingStorageInput
  | AssignTapePoolInput
  | AttachVolumeInput
  | CancelArchivalInput
  | CancelRetrievalInput
  | CreateCachediSCSIVolumeInput
  | CreateNFSFileShareInput
  | CreateSMBFileShareInput
  | CreateSnapshotInput
  | CreateSnapshotFromVolumeRecoveryPointInput
  | CreateStorediSCSIVolumeInput
  | CreateTapeWithBarcodeInput
  | CreateTapesInput
  | DeleteBandwidthRateLimitInput
  | DeleteChapCredentialsInput
  | DeleteFileShareInput
  | DeleteGatewayInput
  | DeleteSnapshotScheduleInput
  | DeleteTapeInput
  | DeleteTapeArchiveInput
  | DeleteVolumeInput
  | DescribeBandwidthRateLimitInput
  | DescribeCacheInput
  | DescribeCachediSCSIVolumesInput
  | DescribeChapCredentialsInput
  | DescribeGatewayInformationInput
  | DescribeMaintenanceStartTimeInput
  | DescribeNFSFileSharesInput
  | DescribeSMBFileSharesInput
  | DescribeSMBSettingsInput
  | DescribeSnapshotScheduleInput
  | DescribeStorediSCSIVolumesInput
  | DescribeTapeArchivesInput
  | DescribeTapeRecoveryPointsInput
  | DescribeTapesInput
  | DescribeUploadBufferInput
  | DescribeVTLDevicesInput
  | DescribeWorkingStorageInput
  | DetachVolumeInput
  | DisableGatewayInput
  | JoinDomainInput
  | ListFileSharesInput
  | ListGatewaysInput
  | ListLocalDisksInput
  | ListTagsForResourceInput
  | ListTapesInput
  | ListVolumeInitiatorsInput
  | ListVolumeRecoveryPointsInput
  | ListVolumesInput
  | NotifyWhenUploadedInput
  | RefreshCacheInput
  | RemoveTagsFromResourceInput
  | ResetCacheInput
  | RetrieveTapeArchiveInput
  | RetrieveTapeRecoveryPointInput
  | SetLocalConsolePasswordInput
  | SetSMBGuestPasswordInput
  | ShutdownGatewayInput
  | StartGatewayInput
  | UpdateBandwidthRateLimitInput
  | UpdateChapCredentialsInput
  | UpdateGatewayInformationInput
  | UpdateGatewaySoftwareNowInput
  | UpdateMaintenanceStartTimeInput
  | UpdateNFSFileShareInput
  | UpdateSMBFileShareInput
  | UpdateSMBSecurityStrategyInput
  | UpdateSnapshotScheduleInput
  | UpdateVTLDeviceTypeInput;
