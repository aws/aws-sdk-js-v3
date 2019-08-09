import { ActivateGatewayOutput } from "./ActivateGatewayOutput";
import { AddCacheOutput } from "./AddCacheOutput";
import { AddTagsToResourceOutput } from "./AddTagsToResourceOutput";
import { AddUploadBufferOutput } from "./AddUploadBufferOutput";
import { AddWorkingStorageOutput } from "./AddWorkingStorageOutput";
import { AssignTapePoolOutput } from "./AssignTapePoolOutput";
import { AttachVolumeOutput } from "./AttachVolumeOutput";
import { CancelArchivalOutput } from "./CancelArchivalOutput";
import { CancelRetrievalOutput } from "./CancelRetrievalOutput";
import { CreateCachediSCSIVolumeOutput } from "./CreateCachediSCSIVolumeOutput";
import { CreateNFSFileShareOutput } from "./CreateNFSFileShareOutput";
import { CreateSMBFileShareOutput } from "./CreateSMBFileShareOutput";
import { CreateSnapshotOutput } from "./CreateSnapshotOutput";
import { CreateSnapshotFromVolumeRecoveryPointOutput } from "./CreateSnapshotFromVolumeRecoveryPointOutput";
import { CreateStorediSCSIVolumeOutput } from "./CreateStorediSCSIVolumeOutput";
import { CreateTapeWithBarcodeOutput } from "./CreateTapeWithBarcodeOutput";
import { CreateTapesOutput } from "./CreateTapesOutput";
import { DeleteBandwidthRateLimitOutput } from "./DeleteBandwidthRateLimitOutput";
import { DeleteChapCredentialsOutput } from "./DeleteChapCredentialsOutput";
import { DeleteFileShareOutput } from "./DeleteFileShareOutput";
import { DeleteGatewayOutput } from "./DeleteGatewayOutput";
import { DeleteSnapshotScheduleOutput } from "./DeleteSnapshotScheduleOutput";
import { DeleteTapeOutput } from "./DeleteTapeOutput";
import { DeleteTapeArchiveOutput } from "./DeleteTapeArchiveOutput";
import { DeleteVolumeOutput } from "./DeleteVolumeOutput";
import { DescribeBandwidthRateLimitOutput } from "./DescribeBandwidthRateLimitOutput";
import { DescribeCacheOutput } from "./DescribeCacheOutput";
import { DescribeCachediSCSIVolumesOutput } from "./DescribeCachediSCSIVolumesOutput";
import { DescribeChapCredentialsOutput } from "./DescribeChapCredentialsOutput";
import { DescribeGatewayInformationOutput } from "./DescribeGatewayInformationOutput";
import { DescribeMaintenanceStartTimeOutput } from "./DescribeMaintenanceStartTimeOutput";
import { DescribeNFSFileSharesOutput } from "./DescribeNFSFileSharesOutput";
import { DescribeSMBFileSharesOutput } from "./DescribeSMBFileSharesOutput";
import { DescribeSMBSettingsOutput } from "./DescribeSMBSettingsOutput";
import { DescribeSnapshotScheduleOutput } from "./DescribeSnapshotScheduleOutput";
import { DescribeStorediSCSIVolumesOutput } from "./DescribeStorediSCSIVolumesOutput";
import { DescribeTapeArchivesOutput } from "./DescribeTapeArchivesOutput";
import { DescribeTapeRecoveryPointsOutput } from "./DescribeTapeRecoveryPointsOutput";
import { DescribeTapesOutput } from "./DescribeTapesOutput";
import { DescribeUploadBufferOutput } from "./DescribeUploadBufferOutput";
import { DescribeVTLDevicesOutput } from "./DescribeVTLDevicesOutput";
import { DescribeWorkingStorageOutput } from "./DescribeWorkingStorageOutput";
import { DetachVolumeOutput } from "./DetachVolumeOutput";
import { DisableGatewayOutput } from "./DisableGatewayOutput";
import { JoinDomainOutput } from "./JoinDomainOutput";
import { ListFileSharesOutput } from "./ListFileSharesOutput";
import { ListGatewaysOutput } from "./ListGatewaysOutput";
import { ListLocalDisksOutput } from "./ListLocalDisksOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListTapesOutput } from "./ListTapesOutput";
import { ListVolumeInitiatorsOutput } from "./ListVolumeInitiatorsOutput";
import { ListVolumeRecoveryPointsOutput } from "./ListVolumeRecoveryPointsOutput";
import { ListVolumesOutput } from "./ListVolumesOutput";
import { NotifyWhenUploadedOutput } from "./NotifyWhenUploadedOutput";
import { RefreshCacheOutput } from "./RefreshCacheOutput";
import { RemoveTagsFromResourceOutput } from "./RemoveTagsFromResourceOutput";
import { ResetCacheOutput } from "./ResetCacheOutput";
import { RetrieveTapeArchiveOutput } from "./RetrieveTapeArchiveOutput";
import { RetrieveTapeRecoveryPointOutput } from "./RetrieveTapeRecoveryPointOutput";
import { SetLocalConsolePasswordOutput } from "./SetLocalConsolePasswordOutput";
import { SetSMBGuestPasswordOutput } from "./SetSMBGuestPasswordOutput";
import { ShutdownGatewayOutput } from "./ShutdownGatewayOutput";
import { StartGatewayOutput } from "./StartGatewayOutput";
import { UpdateBandwidthRateLimitOutput } from "./UpdateBandwidthRateLimitOutput";
import { UpdateChapCredentialsOutput } from "./UpdateChapCredentialsOutput";
import { UpdateGatewayInformationOutput } from "./UpdateGatewayInformationOutput";
import { UpdateGatewaySoftwareNowOutput } from "./UpdateGatewaySoftwareNowOutput";
import { UpdateMaintenanceStartTimeOutput } from "./UpdateMaintenanceStartTimeOutput";
import { UpdateNFSFileShareOutput } from "./UpdateNFSFileShareOutput";
import { UpdateSMBFileShareOutput } from "./UpdateSMBFileShareOutput";
import { UpdateSMBSecurityStrategyOutput } from "./UpdateSMBSecurityStrategyOutput";
import { UpdateSnapshotScheduleOutput } from "./UpdateSnapshotScheduleOutput";
import { UpdateVTLDeviceTypeOutput } from "./UpdateVTLDeviceTypeOutput";
export type OutputTypesUnion =
  | ActivateGatewayOutput
  | AddCacheOutput
  | AddTagsToResourceOutput
  | AddUploadBufferOutput
  | AddWorkingStorageOutput
  | AssignTapePoolOutput
  | AttachVolumeOutput
  | CancelArchivalOutput
  | CancelRetrievalOutput
  | CreateCachediSCSIVolumeOutput
  | CreateNFSFileShareOutput
  | CreateSMBFileShareOutput
  | CreateSnapshotOutput
  | CreateSnapshotFromVolumeRecoveryPointOutput
  | CreateStorediSCSIVolumeOutput
  | CreateTapeWithBarcodeOutput
  | CreateTapesOutput
  | DeleteBandwidthRateLimitOutput
  | DeleteChapCredentialsOutput
  | DeleteFileShareOutput
  | DeleteGatewayOutput
  | DeleteSnapshotScheduleOutput
  | DeleteTapeOutput
  | DeleteTapeArchiveOutput
  | DeleteVolumeOutput
  | DescribeBandwidthRateLimitOutput
  | DescribeCacheOutput
  | DescribeCachediSCSIVolumesOutput
  | DescribeChapCredentialsOutput
  | DescribeGatewayInformationOutput
  | DescribeMaintenanceStartTimeOutput
  | DescribeNFSFileSharesOutput
  | DescribeSMBFileSharesOutput
  | DescribeSMBSettingsOutput
  | DescribeSnapshotScheduleOutput
  | DescribeStorediSCSIVolumesOutput
  | DescribeTapeArchivesOutput
  | DescribeTapeRecoveryPointsOutput
  | DescribeTapesOutput
  | DescribeUploadBufferOutput
  | DescribeVTLDevicesOutput
  | DescribeWorkingStorageOutput
  | DetachVolumeOutput
  | DisableGatewayOutput
  | JoinDomainOutput
  | ListFileSharesOutput
  | ListGatewaysOutput
  | ListLocalDisksOutput
  | ListTagsForResourceOutput
  | ListTapesOutput
  | ListVolumeInitiatorsOutput
  | ListVolumeRecoveryPointsOutput
  | ListVolumesOutput
  | NotifyWhenUploadedOutput
  | RefreshCacheOutput
  | RemoveTagsFromResourceOutput
  | ResetCacheOutput
  | RetrieveTapeArchiveOutput
  | RetrieveTapeRecoveryPointOutput
  | SetLocalConsolePasswordOutput
  | SetSMBGuestPasswordOutput
  | ShutdownGatewayOutput
  | StartGatewayOutput
  | UpdateBandwidthRateLimitOutput
  | UpdateChapCredentialsOutput
  | UpdateGatewayInformationOutput
  | UpdateGatewaySoftwareNowOutput
  | UpdateMaintenanceStartTimeOutput
  | UpdateNFSFileShareOutput
  | UpdateSMBFileShareOutput
  | UpdateSMBSecurityStrategyOutput
  | UpdateSnapshotScheduleOutput
  | UpdateVTLDeviceTypeOutput;
