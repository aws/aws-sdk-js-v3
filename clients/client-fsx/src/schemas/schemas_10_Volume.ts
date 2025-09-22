// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessPointAlreadyOwnedByYou as __AccessPointAlreadyOwnedByYou,
  InvalidAccessPoint as __InvalidAccessPoint,
  InvalidRequest as __InvalidRequest,
  TooManyAccessPoints as __TooManyAccessPoints,
  VolumeNotFound as __VolumeNotFound,
} from "../models/index";
import {
  _AAd,
  _ALV,
  _APAOBY,
  _APu,
  _B,
  _BSER,
  _c,
  _CAASAP,
  _CAASAPOZFSC,
  _CAASAPR,
  _CAASAPRr,
  _CAASAPSC,
  _CBr,
  _CBRr,
  _CBRre,
  _CRT,
  _CSR,
  _CSr,
  _CSRr,
  _CTTB,
  _DCTa,
  _DV,
  _DVOC,
  _DVOR,
  _DVOZFSC,
  _DVR,
  _DVRe,
  _E,
  _e,
  _EC,
  _FBI,
  _FBT,
  _FSI,
  _FSIi,
  _hE,
  _IAP,
  _IRn,
  _JP,
  _L,
  _M,
  _N,
  _NE,
  _O,
  _OC,
  _OR,
  _OZFSC,
  _PD,
  _Po,
  _RO,
  _RP,
  _RSKB,
  _RVFS,
  _RVFSR,
  _RVFSRe,
  _SAP,
  _SAPA,
  _SCn,
  _SCQGB,
  _SCRGB,
  _SEE,
  _SFB,
  _SIB,
  _SIM,
  _SIn,
  _Sn,
  _SP,
  _SS,
  _T,
  _Ta,
  _TMAP,
  _TP,
  _UAGQ,
  _UOVC,
  _UOZFSVC,
  _USC,
  _UV,
  _UVR,
  _UVRp,
  _VAME,
  _VC,
  _VI,
  _VNF,
  _Vo,
  _xN,
  AdministrativeActions,
  AutocommitPeriod,
  n0,
  OpenZFSNfsExports,
  OpenZFSUserAndGroupQuotas,
  SnaplockRetentionPeriod,
  Snapshot,
  Tags,
  TieringPolicy,
  Volume,
} from "./schemas_0";
import { Backup } from "./schemas_2_Backup";
import {
  OpenZFSFileSystemIdentity,
  S3AccessPointAttachment,
  S3AccessPointVpcConfiguration,
} from "./schemas_3_S3AccessPoint";

/* eslint no-var: 0 */

export var AccessPointAlreadyOwnedByYou = error(
  n0,
  _APAOBY,
  {
    [_xN]: _E,
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __AccessPointAlreadyOwnedByYou
);
export var CreateAndAttachS3AccessPointOpenZFSConfiguration = struct(
  n0,
  _CAASAPOZFSC,
  0,
  [_VI, _FSIi],
  [0, () => OpenZFSFileSystemIdentity]
);
export var CreateAndAttachS3AccessPointRequest = struct(
  n0,
  _CAASAPR,
  0,
  [_CRT, _N, _T, _OZFSC, _SAP],
  [
    [0, 4],
    0,
    0,
    () => CreateAndAttachS3AccessPointOpenZFSConfiguration,
    () => CreateAndAttachS3AccessPointS3Configuration,
  ]
);
export var CreateAndAttachS3AccessPointResponse = struct(n0, _CAASAPRr, 0, [_SAPA], [() => S3AccessPointAttachment]);
export var CreateAndAttachS3AccessPointS3Configuration = struct(
  n0,
  _CAASAPSC,
  0,
  [_VC, _Po],
  [() => S3AccessPointVpcConfiguration, 0]
);
export var CreateBackupRequest = struct(n0, _CBRr, 0, [_FSI, _CRT, _Ta, _VI], [0, [0, 4], () => Tags, 0]);
export var CreateBackupResponse = struct(n0, _CBRre, 0, [_B], [[() => Backup, 0]]);
export var CreateSnapshotRequest = struct(n0, _CSR, 0, [_CRT, _N, _VI, _Ta], [[0, 4], 0, 0, () => Tags]);
export var CreateSnapshotResponse = struct(n0, _CSRr, 0, [_Sn], [() => Snapshot]);
export var DeleteVolumeOntapConfiguration = struct(n0, _DVOC, 0, [_SFB, _FBT, _BSER], [2, () => Tags, 2]);
export var DeleteVolumeOntapResponse = struct(n0, _DVOR, 0, [_FBI, _FBT], [0, () => Tags]);
export var DeleteVolumeOpenZFSConfiguration = struct(n0, _DVOZFSC, 0, [_O], [64 | 0]);
export var DeleteVolumeRequest = struct(
  n0,
  _DVR,
  0,
  [_CRT, _VI, _OC, _OZFSC],
  [[0, 4], 0, () => DeleteVolumeOntapConfiguration, () => DeleteVolumeOpenZFSConfiguration]
);
export var DeleteVolumeResponse = struct(n0, _DVRe, 0, [_VI, _L, _OR], [0, 0, () => DeleteVolumeOntapResponse]);
export var InvalidAccessPoint = error(
  n0,
  _IAP,
  {
    [_xN]: _E,
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __InvalidAccessPoint
);
export var InvalidRequest = error(
  n0,
  _IRn,
  {
    [_xN]: _E,
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __InvalidRequest
);
export var RestoreVolumeFromSnapshotRequest = struct(n0, _RVFSR, 0, [_CRT, _VI, _SIn, _O], [[0, 4], 0, 0, 64 | 0]);
export var RestoreVolumeFromSnapshotResponse = struct(
  n0,
  _RVFSRe,
  0,
  [_VI, _L, _AAd],
  [0, 0, [() => AdministrativeActions, 0]]
);
export var TooManyAccessPoints = error(
  n0,
  _TMAP,
  {
    [_xN]: _E,
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __TooManyAccessPoints
);
export var UpdateOntapVolumeConfiguration = struct(
  n0,
  _UOVC,
  0,
  [_JP, _SS, _SIM, _SEE, _TP, _SP, _CTTB, _SCn, _SIB],
  [0, 0, 1, 2, () => TieringPolicy, 0, 2, () => UpdateSnaplockConfiguration, 1]
);
export var UpdateOpenZFSVolumeConfiguration = struct(
  n0,
  _UOZFSVC,
  0,
  [_SCRGB, _SCQGB, _RSKB, _DCTa, _NE, _UAGQ, _RO],
  [1, 1, 1, 0, () => OpenZFSNfsExports, () => OpenZFSUserAndGroupQuotas, 2]
);
export var UpdateSnaplockConfiguration = struct(
  n0,
  _USC,
  0,
  [_ALV, _APu, _PD, _RP, _VAME],
  [2, () => AutocommitPeriod, 0, () => SnaplockRetentionPeriod, 2]
);
export var UpdateVolumeRequest = struct(
  n0,
  _UVR,
  0,
  [_CRT, _VI, _OC, _N, _OZFSC],
  [[0, 4], 0, () => UpdateOntapVolumeConfiguration, 0, () => UpdateOpenZFSVolumeConfiguration]
);
export var UpdateVolumeResponse = struct(n0, _UVRp, 0, [_Vo], [() => Volume]);
export var VolumeNotFound = error(
  n0,
  _VNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __VolumeNotFound
);
export var DeleteOpenZFSVolumeOptions = 64 | 0;

export var RestoreOpenZFSVolumeOptions = 64 | 0;

export var CreateAndAttachS3AccessPoint = op(
  n0,
  _CAASAP,
  0,
  () => CreateAndAttachS3AccessPointRequest,
  () => CreateAndAttachS3AccessPointResponse
);
export var CreateBackup = op(
  n0,
  _CBr,
  2,
  () => CreateBackupRequest,
  () => CreateBackupResponse
);
export var CreateSnapshot = op(
  n0,
  _CSr,
  2,
  () => CreateSnapshotRequest,
  () => CreateSnapshotResponse
);
export var DeleteVolume = op(
  n0,
  _DV,
  0,
  () => DeleteVolumeRequest,
  () => DeleteVolumeResponse
);
export var RestoreVolumeFromSnapshot = op(
  n0,
  _RVFS,
  2,
  () => RestoreVolumeFromSnapshotRequest,
  () => RestoreVolumeFromSnapshotResponse
);
export var UpdateVolume = op(
  n0,
  _UV,
  0,
  () => UpdateVolumeRequest,
  () => UpdateVolumeResponse
);
