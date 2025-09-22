// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _aM,
  _ASC,
  _aSC,
  _aSM,
  _aU,
  _aV,
  _aZI,
  _aZIv,
  _CC,
  _cC,
  _cD,
  _cI,
  _CKCr,
  _CKCRre,
  _CKCRrea,
  _CKDr,
  _CKDRre,
  _CKDRrea,
  _CKV,
  _CKVR,
  _CKVRr,
  _cLA,
  _cN,
  _co,
  _cp,
  _cS,
  _cSC,
  _cTl,
  _cTlu,
  _cTr,
  _d,
  _da,
  _dN,
  _dNa,
  _eI,
  _eR,
  _GKCe,
  _GKCRet,
  _GKCRetx,
  _GKDe,
  _GKDRet,
  _GKDRetx,
  _GKV,
  _GKVR,
  _GKVRe,
  _h,
  _hQ,
  _iAT,
  _iS,
  _KAC,
  _KACx,
  _KC,
  _kCS,
  _KCSC,
  _KCSCx,
  _KCxl,
  _KDAV,
  _KDAVL,
  _KDLEx,
  _KDx,
  _kDx,
  _KNASC,
  _KSGC,
  _KSSC,
  _KV,
  _kVS,
  _KVx,
  _LKCi,
  _LKCRis,
  _LKCRist,
  _LKDi,
  _LKDRis,
  _LKDRist,
  _LKV,
  _LKVR,
  _LKVRi,
  _lMT,
  _mL,
  _mNC,
  _mNCa,
  _mR,
  _mRa,
  _mT,
  _nC,
  _nCa,
  _nT,
  _nTe,
  _rL,
  _rW,
  _s,
  _sC,
  _sGC,
  _sGI,
  _sGN,
  _sI,
  _si,
  _sICS,
  _sOCS,
  _sR,
  _sSC,
  _t,
  _TLC,
  _tLC,
  _tLV,
  _ty,
  _UKDp,
  _UKDRpd,
  _UKDRpda,
  _UKV,
  _UKVR,
  _UKVRp,
  _V,
  _v,
  _vA,
  _VC,
  _vC,
  _vI,
  _vIp,
  _vN,
  _Vo,
  _vT,
  n0,
} from "./schemas_0";
import { CodeConfiguration, KxCommandLineArguments } from "./schemas_7_KxCluster";
import { KxDatabaseConfigurations, KxDataviewSegmentConfigurationList } from "./schemas_9_Get";

/* eslint no-var: 0 */

export var AutoScalingConfiguration = struct(n0, _ASC, 0, [_mNC, _mNCa, _aSM, _mT, _sICS, _sOCS], [1, 1, 0, 1, 1, 1]);
export var CapacityConfiguration = struct(n0, _CC, 0, [_nT, _nC], [0, 1]);
export var CreateKxClusterRequest = struct(
  n0,
  _CKCRre,
  0,
  [_cTl, _eI, _cN, _cTlu, _tLC, _da, _cSC, _aSC, _cD, _cC, _rL, _vC, _iS, _cLA, _co, _eR, _sSC, _aM, _aZI, _t, _sGC],
  [
    [0, 4],
    [0, 1],
    0,
    0,
    () => TickerplantLogConfiguration,
    () => KxDatabaseConfigurations,
    () => KxCacheStorageConfigurations,
    () => AutoScalingConfiguration,
    0,
    () => CapacityConfiguration,
    0,
    () => VpcConfiguration,
    0,
    () => KxCommandLineArguments,
    () => CodeConfiguration,
    0,
    () => KxSavedownStorageConfiguration,
    0,
    0,
    128 | 0,
    () => KxScalingGroupConfiguration,
  ]
);
export var CreateKxClusterResponse = struct(
  n0,
  _CKCRrea,
  0,
  [
    _eI,
    _s,
    _sR,
    _cN,
    _cTlu,
    _tLC,
    _v,
    _da,
    _cSC,
    _aSC,
    _cD,
    _cC,
    _rL,
    _vC,
    _iS,
    _cLA,
    _co,
    _eR,
    _lMT,
    _sSC,
    _aM,
    _aZI,
    _cTr,
    _sGC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => TickerplantLogConfiguration,
    () => Volumes,
    () => KxDatabaseConfigurations,
    () => KxCacheStorageConfigurations,
    () => AutoScalingConfiguration,
    0,
    () => CapacityConfiguration,
    0,
    () => VpcConfiguration,
    0,
    () => KxCommandLineArguments,
    () => CodeConfiguration,
    0,
    4,
    () => KxSavedownStorageConfiguration,
    0,
    0,
    4,
    () => KxScalingGroupConfiguration,
  ]
);
export var CreateKxDataviewRequest = struct(
  n0,
  _CKDRre,
  0,
  [_eI, _dN, _dNa, _aM, _aZI, _cI, _sC, _aU, _rW, _d, _t, _cTl],
  [[0, 1], [0, 1], 0, 0, 0, 0, () => KxDataviewSegmentConfigurationList, 2, 2, 0, 128 | 0, [0, 4]]
);
export var CreateKxDataviewResponse = struct(
  n0,
  _CKDRrea,
  0,
  [_dNa, _dN, _eI, _aM, _aZI, _cI, _sC, _d, _aU, _rW, _cTr, _lMT, _s],
  [0, 0, 0, 0, 0, 0, () => KxDataviewSegmentConfigurationList, 0, 2, 2, 4, 4, 0]
);
export var CreateKxVolumeRequest = struct(
  n0,
  _CKVR,
  0,
  [_cTl, _eI, _vT, _vN, _d, _nCa, _aM, _aZIv, _t],
  [[0, 4], [0, 1], 0, 0, 0, () => KxNAS1Configuration, 0, 64 | 0, 128 | 0]
);
export var CreateKxVolumeResponse = struct(
  n0,
  _CKVRr,
  0,
  [_eI, _vN, _vT, _vA, _nCa, _s, _sR, _aM, _d, _aZIv, _cTr],
  [0, 0, 0, 0, () => KxNAS1Configuration, 0, 0, 0, 0, 64 | 0, 4]
);
export var GetKxClusterRequest = struct(
  n0,
  _GKCRet,
  0,
  [_eI, _cN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKxClusterResponse = struct(
  n0,
  _GKCRetx,
  0,
  [
    _s,
    _sR,
    _cN,
    _cTlu,
    _tLC,
    _v,
    _da,
    _cSC,
    _aSC,
    _cD,
    _cC,
    _rL,
    _vC,
    _iS,
    _cLA,
    _co,
    _eR,
    _lMT,
    _sSC,
    _aM,
    _aZI,
    _cTr,
    _sGC,
  ],
  [
    0,
    0,
    0,
    0,
    () => TickerplantLogConfiguration,
    () => Volumes,
    () => KxDatabaseConfigurations,
    () => KxCacheStorageConfigurations,
    () => AutoScalingConfiguration,
    0,
    () => CapacityConfiguration,
    0,
    () => VpcConfiguration,
    0,
    () => KxCommandLineArguments,
    () => CodeConfiguration,
    0,
    4,
    () => KxSavedownStorageConfiguration,
    0,
    0,
    4,
    () => KxScalingGroupConfiguration,
  ]
);
export var GetKxDataviewRequest = struct(
  n0,
  _GKDRet,
  0,
  [_eI, _dN, _dNa],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetKxDataviewResponse = struct(
  n0,
  _GKDRetx,
  0,
  [_dN, _dNa, _aM, _aZI, _cI, _sC, _aV, _d, _aU, _rW, _eI, _cTr, _lMT, _s, _sR],
  [0, 0, 0, 0, 0, () => KxDataviewSegmentConfigurationList, () => KxDataviewActiveVersionList, 0, 2, 2, 0, 4, 4, 0, 0]
);
export var GetKxVolumeRequest = struct(
  n0,
  _GKVR,
  0,
  [_eI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKxVolumeResponse = struct(
  n0,
  _GKVRe,
  0,
  [_eI, _vN, _vT, _vA, _nCa, _s, _sR, _cTr, _d, _aM, _aZIv, _lMT, _aC],
  [0, 0, 0, 0, () => KxNAS1Configuration, 0, 0, 4, 0, 0, 64 | 0, 4, () => KxAttachedClusters]
);
export var KxAttachedCluster = struct(n0, _KAC, 0, [_cN, _cTlu, _cS], [0, 0, 0]);
export var KxCacheStorageConfiguration = struct(n0, _KCSC, 0, [_ty, _si], [0, 1]);
export var KxCluster = struct(
  n0,
  _KC,
  0,
  [_s, _sR, _cN, _cTlu, _cD, _rL, _v, _iS, _eR, _aM, _aZI, _lMT, _cTr],
  [0, 0, 0, 0, 0, 0, () => Volumes, 0, 0, 0, 0, 4, 4]
);
export var KxDataviewActiveVersion = struct(
  n0,
  _KDAV,
  0,
  [_cI, _sC, _aC, _cTr, _vI],
  [0, () => KxDataviewSegmentConfigurationList, 64 | 0, 4, 0]
);
export var KxDataviewListEntry = struct(
  n0,
  _KDLEx,
  0,
  [_eI, _dN, _dNa, _aM, _aZI, _cI, _sC, _aV, _s, _d, _aU, _rW, _cTr, _lMT, _sR],
  [0, 0, 0, 0, 0, 0, () => KxDataviewSegmentConfigurationList, () => KxDataviewActiveVersionList, 0, 0, 2, 2, 4, 4, 0]
);
export var KxNAS1Configuration = struct(n0, _KNASC, 0, [_ty, _si], [0, 1]);
export var KxSavedownStorageConfiguration = struct(n0, _KSSC, 0, [_ty, _si, _vN], [0, 1, 0]);
export var KxScalingGroupConfiguration = struct(n0, _KSGC, 0, [_sGN, _mL, _mR, _nC, _cp], [0, 1, 1, 1, 1]);
export var KxVolume = struct(
  n0,
  _KV,
  0,
  [_vN, _vT, _s, _d, _sR, _aM, _aZIv, _cTr, _lMT],
  [0, 0, 0, 0, 0, 0, 64 | 0, 4, 4]
);
export var ListKxClustersRequest = struct(
  n0,
  _LKCRis,
  0,
  [_eI, _cTlu, _mRa, _nTe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cTlu,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
  ]
);
export var ListKxClustersResponse = struct(n0, _LKCRist, 0, [_kCS, _nTe], [() => KxClusters, 0]);
export var ListKxDataviewsRequest = struct(
  n0,
  _LKDRis,
  0,
  [_eI, _dN, _nTe, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListKxDataviewsResponse = struct(n0, _LKDRist, 0, [_kDx, _nTe], [() => KxDataviews, 0]);
export var ListKxVolumesRequest = struct(
  n0,
  _LKVR,
  0,
  [_eI, _mRa, _nTe, _vT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      0,
      {
        [_hQ]: _vT,
      },
    ],
  ]
);
export var ListKxVolumesResponse = struct(n0, _LKVRi, 0, [_kVS, _nTe], [() => KxVolumes, 0]);
export var TickerplantLogConfiguration = struct(n0, _TLC, 0, [_tLV], [64 | 0]);
export var UpdateKxDataviewRequest = struct(
  n0,
  _UKDRpd,
  0,
  [_eI, _dN, _dNa, _d, _cI, _sC, _cTl],
  [[0, 1], [0, 1], [0, 1], 0, 0, () => KxDataviewSegmentConfigurationList, [0, 4]]
);
export var UpdateKxDataviewResponse = struct(
  n0,
  _UKDRpda,
  0,
  [_eI, _dN, _dNa, _aM, _aZI, _cI, _sC, _aV, _s, _aU, _rW, _d, _cTr, _lMT],
  [0, 0, 0, 0, 0, 0, () => KxDataviewSegmentConfigurationList, () => KxDataviewActiveVersionList, 0, 2, 2, 0, 4, 4]
);
export var UpdateKxVolumeRequest = struct(
  n0,
  _UKVR,
  0,
  [_eI, _vN, _d, _cTl, _nCa],
  [[0, 1], [0, 1], 0, [0, 4], () => KxNAS1Configuration]
);
export var UpdateKxVolumeResponse = struct(
  n0,
  _UKVRp,
  0,
  [_eI, _vN, _vT, _vA, _nCa, _s, _d, _sR, _cTr, _aM, _aZIv, _lMT, _aC],
  [0, 0, 0, 0, () => KxNAS1Configuration, 0, 0, 0, 4, 0, 64 | 0, 4, () => KxAttachedClusters]
);
export var Volume = struct(n0, _V, 0, [_vN, _vT], [0, 0]);
export var VpcConfiguration = struct(n0, _VC, 0, [_vIp, _sGI, _sI, _iAT], [0, 64 | 0, 64 | 0, 0]);
export var AttachedClusterList = 64 | 0;

export var KxAttachedClusters = list(n0, _KACx, 0, () => KxAttachedCluster);
export var KxCacheStorageConfigurations = list(n0, _KCSCx, 0, () => KxCacheStorageConfiguration);
export var KxClusters = list(n0, _KCxl, 0, () => KxCluster);
export var KxDataviewActiveVersionList = list(n0, _KDAVL, 0, () => KxDataviewActiveVersion);
export var KxDataviews = list(n0, _KDx, 0, () => KxDataviewListEntry);
export var KxVolumes = list(n0, _KVx, 0, () => KxVolume);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var TickerplantLogVolumes = 64 | 0;

export var Volumes = list(n0, _Vo, 0, () => Volume);
export var CreateKxCluster = op(
  n0,
  _CKCr,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/clusters", 200],
  },
  () => CreateKxClusterRequest,
  () => CreateKxClusterResponse
);
export var CreateKxDataview = op(
  n0,
  _CKDr,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/databases/{databaseName}/dataviews", 200],
  },
  () => CreateKxDataviewRequest,
  () => CreateKxDataviewResponse
);
export var CreateKxVolume = op(
  n0,
  _CKV,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/kxvolumes", 200],
  },
  () => CreateKxVolumeRequest,
  () => CreateKxVolumeResponse
);
export var GetKxCluster = op(
  n0,
  _GKCe,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/clusters/{clusterName}", 200],
  },
  () => GetKxClusterRequest,
  () => GetKxClusterResponse
);
export var GetKxDataview = op(
  n0,
  _GKDe,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}", 200],
  },
  () => GetKxDataviewRequest,
  () => GetKxDataviewResponse
);
export var GetKxVolume = op(
  n0,
  _GKV,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/kxvolumes/{volumeName}", 200],
  },
  () => GetKxVolumeRequest,
  () => GetKxVolumeResponse
);
export var ListKxClusters = op(
  n0,
  _LKCi,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/clusters", 200],
  },
  () => ListKxClustersRequest,
  () => ListKxClustersResponse
);
export var ListKxDataviews = op(
  n0,
  _LKDi,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases/{databaseName}/dataviews", 200],
  },
  () => ListKxDataviewsRequest,
  () => ListKxDataviewsResponse
);
export var ListKxVolumes = op(
  n0,
  _LKV,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/kxvolumes", 200],
  },
  () => ListKxVolumesRequest,
  () => ListKxVolumesResponse
);
export var UpdateKxDataview = op(
  n0,
  _UKDp,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}", 200],
  },
  () => UpdateKxDataviewRequest,
  () => UpdateKxDataviewResponse
);
export var UpdateKxVolume = op(
  n0,
  _UKV,
  {
    [_h]: ["PATCH", "/kx/environments/{environmentId}/kxvolumes/{volumeName}", 200],
  },
  () => UpdateKxVolumeRequest,
  () => UpdateKxVolumeResponse
);
