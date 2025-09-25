// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAIB,
  _CCSCSIV,
  _CCSCSIVI,
  _CCSCSIVO,
  _CD,
  _CDP,
  _CE,
  _CHP,
  _CMP,
  _CSCSIV,
  _CSCSIVa,
  _CSSCSIV,
  _CSSCSIVI,
  _CSSCSIVO,
  _CT,
  _CUP,
  _DAL,
  _DAR,
  _DAT,
  _DCe,
  _DCI,
  _DCO,
  _DCSCSIV,
  _DCSCSIVI,
  _DCSCSIVO,
  _DI,
  _Di,
  _DIi,
  _Dis,
  _DNi,
  _DP,
  _DS,
  _DSIB,
  _DSSCSIV,
  _DSSCSIVI,
  _DSSCSIVO,
  _DUB,
  _DUBI,
  _DUBO,
  _DWS,
  _DWSI,
  _DWSO,
  _GARN,
  _GI,
  _KMSE,
  _KMSK,
  _L,
  _LLD,
  _LLDI,
  _LLDO,
  _LN,
  _LV,
  _LVI,
  _LVO,
  _LVRP,
  _LVRPI,
  _LVRPO,
  _M,
  _NII,
  _NIP,
  _PED,
  _PEDr,
  _SI,
  _SSCSIV,
  _SSCSIVt,
  _SSI,
  _SVARN,
  _T,
  _TARNa,
  _TN,
  _UBAIB,
  _UBUIB,
  _VARN,
  _VARNo,
  _VAS,
  _VDI,
  _VI,
  _VIo,
  _VIol,
  _VP,
  _VRPI,
  _VRPIo,
  _VRPT,
  _VS,
  _VSCSIA,
  _VSIB,
  _VT,
  _VUIB,
  _VUIBo,
  _WSAIB,
  _WSUIB,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CachediSCSIVolume = struct(
  n0,
  _CSCSIV,
  0,
  [_VARN, _VI, _VT, _VS, _VAS, _VSIB, _VP, _SSI, _VSCSIA, _CD, _VUIB, _KMSK, _TN],
  [0, 0, 0, 0, 0, 1, 1, 0, () => VolumeiSCSIAttributes, 4, 1, 0, 0]
);
export var CreateCachediSCSIVolumeInput = struct(
  n0,
  _CCSCSIVI,
  0,
  [_GARN, _VSIB, _SI, _TN, _SVARN, _NII, _CT, _KMSE, _KMSK, _T],
  [0, 1, 0, 0, 0, 0, 0, 2, 0, () => Tags]
);
export var CreateCachediSCSIVolumeOutput = struct(n0, _CCSCSIVO, 0, [_VARN, _TARNa], [0, 0]);
export var CreateStorediSCSIVolumeInput = struct(
  n0,
  _CSSCSIVI,
  0,
  [_GARN, _DIi, _SI, _PED, _TN, _NII, _KMSE, _KMSK, _T],
  [0, 0, 0, 2, 0, 0, 2, 0, () => Tags]
);
export var CreateStorediSCSIVolumeOutput = struct(n0, _CSSCSIVO, 0, [_VARN, _VSIB, _TARNa], [0, 1, 0]);
export var DescribeCachediSCSIVolumesInput = struct(n0, _DCSCSIVI, 0, [_VARNo], [64 | 0]);
export var DescribeCachediSCSIVolumesOutput = struct(n0, _DCSCSIVO, 0, [_CSCSIVa], [() => CachediSCSIVolumes]);
export var DescribeCacheInput = struct(n0, _DCI, 0, [_GARN], [0]);
export var DescribeCacheOutput = struct(
  n0,
  _DCO,
  0,
  [_GARN, _DI, _CAIB, _CUP, _CDP, _CHP, _CMP],
  [0, 64 | 0, 1, 1, 1, 1, 1]
);
export var DescribeStorediSCSIVolumesInput = struct(n0, _DSSCSIVI, 0, [_VARNo], [64 | 0]);
export var DescribeStorediSCSIVolumesOutput = struct(n0, _DSSCSIVO, 0, [_SSCSIV], [() => StorediSCSIVolumes]);
export var DescribeUploadBufferInput = struct(n0, _DUBI, 0, [_GARN], [0]);
export var DescribeUploadBufferOutput = struct(n0, _DUBO, 0, [_GARN, _DI, _UBUIB, _UBAIB], [0, 64 | 0, 1, 1]);
export var DescribeWorkingStorageInput = struct(n0, _DWSI, 0, [_GARN], [0]);
export var DescribeWorkingStorageOutput = struct(n0, _DWSO, 0, [_GARN, _DI, _WSUIB, _WSAIB], [0, 64 | 0, 1, 1]);
export var Disk = struct(n0, _Di, 0, [_DIi, _DP, _DNi, _DS, _DSIB, _DAT, _DAR, _DAL], [0, 0, 0, 0, 1, 0, 0, 64 | 0]);
export var ListLocalDisksInput = struct(n0, _LLDI, 0, [_GARN], [0]);
export var ListLocalDisksOutput = struct(n0, _LLDO, 0, [_GARN, _Dis], [0, () => Disks]);
export var ListVolumeRecoveryPointsInput = struct(n0, _LVRPI, 0, [_GARN], [0]);
export var ListVolumeRecoveryPointsOutput = struct(n0, _LVRPO, 0, [_GARN, _VRPI], [0, () => VolumeRecoveryPointInfos]);
export var ListVolumesInput = struct(n0, _LVI, 0, [_GARN, _M, _L], [0, 0, 1]);
export var ListVolumesOutput = struct(n0, _LVO, 0, [_GARN, _M, _VIo], [0, 0, () => VolumeInfos]);
export var StorediSCSIVolume = struct(
  n0,
  _SSCSIVt,
  0,
  [_VARN, _VI, _VT, _VS, _VAS, _VSIB, _VP, _VDI, _SSI, _PEDr, _VSCSIA, _CD, _VUIB, _KMSK, _TN],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 2, () => VolumeiSCSIAttributes, 4, 1, 0, 0]
);
export var VolumeInfo = struct(n0, _VIol, 0, [_VARN, _VI, _GARN, _GI, _VT, _VSIB, _VAS], [0, 0, 0, 0, 0, 1, 0]);
export var VolumeiSCSIAttributes = struct(n0, _VSCSIA, 0, [_TARNa, _NII, _NIP, _LN, _CE], [0, 0, 1, 1, 2]);
export var VolumeRecoveryPointInfo = struct(n0, _VRPIo, 0, [_VARN, _VSIB, _VUIBo, _VRPT], [0, 1, 1, 0]);
export var CachediSCSIVolumes = list(n0, _CSCSIVa, 0, () => CachediSCSIVolume);
export var DiskAttributeList = 64 | 0;

export var Disks = list(n0, _Dis, 0, () => Disk);
export var StorediSCSIVolumes = list(n0, _SSCSIV, 0, () => StorediSCSIVolume);
export var VolumeARNs = 64 | 0;

export var VolumeInfos = list(n0, _VIo, 0, () => VolumeInfo);
export var VolumeRecoveryPointInfos = list(n0, _VRPI, 0, () => VolumeRecoveryPointInfo);
export var CreateCachediSCSIVolume = op(
  n0,
  _CCSCSIV,
  0,
  () => CreateCachediSCSIVolumeInput,
  () => CreateCachediSCSIVolumeOutput
);
export var CreateStorediSCSIVolume = op(
  n0,
  _CSSCSIV,
  0,
  () => CreateStorediSCSIVolumeInput,
  () => CreateStorediSCSIVolumeOutput
);
export var DescribeCache = op(
  n0,
  _DCe,
  0,
  () => DescribeCacheInput,
  () => DescribeCacheOutput
);
export var DescribeCachediSCSIVolumes = op(
  n0,
  _DCSCSIV,
  0,
  () => DescribeCachediSCSIVolumesInput,
  () => DescribeCachediSCSIVolumesOutput
);
export var DescribeStorediSCSIVolumes = op(
  n0,
  _DSSCSIV,
  0,
  () => DescribeStorediSCSIVolumesInput,
  () => DescribeStorediSCSIVolumesOutput
);
export var DescribeUploadBuffer = op(
  n0,
  _DUB,
  0,
  () => DescribeUploadBufferInput,
  () => DescribeUploadBufferOutput
);
export var DescribeWorkingStorage = op(
  n0,
  _DWS,
  0,
  () => DescribeWorkingStorageInput,
  () => DescribeWorkingStorageOutput
);
export var ListLocalDisks = op(
  n0,
  _LLD,
  0,
  () => ListLocalDisksInput,
  () => ListLocalDisksOutput
);
export var ListVolumeRecoveryPoints = op(
  n0,
  _LVRP,
  0,
  () => ListVolumeRecoveryPointsInput,
  () => ListVolumeRecoveryPointsOutput
);
export var ListVolumes = op(
  n0,
  _LV,
  0,
  () => ListVolumesInput,
  () => ListVolumesOutput
);
