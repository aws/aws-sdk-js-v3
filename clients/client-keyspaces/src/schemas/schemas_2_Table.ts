// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _aSD,
  _ASP,
  _ASS,
  _aSS,
  _ASSu,
  _C,
  _CD,
  _CDL,
  _CK,
  _cK,
  _CKL,
  _co,
  _cS,
  _cSd,
  _CSS,
  _CSSd,
  _CST,
  _cST,
  _cT,
  _dSI,
  _dTTL,
  _eRT,
  _ES,
  _eS,
  _GK,
  _GKR,
  _GKRe,
  _GT,
  _GTASS,
  _GTASSR,
  _GTASSRe,
  _GTR,
  _GTRe,
  _k,
  _kKI,
  _kN,
  _KS,
  _kS,
  _KSL,
  _LK,
  _LKR,
  _LKRi,
  _lSA,
  _lUTPPRT,
  _m,
  _mR,
  _mU,
  _mUa,
  _n,
  _nT,
  _oB,
  _pITR,
  _PITRS,
  _PK,
  _pK,
  _PKL,
  _r,
  _rA,
  _RASS,
  _RASSL,
  _rCAS,
  _rCU,
  _RGS,
  _rGS,
  _RGSL,
  _rR,
  _rSe,
  _rSep,
  _RSS,
  _RSSL,
  _s,
  _SC,
  _sC,
  _SCL,
  _SD,
  _sD,
  _sIC,
  _sOC,
  _sP,
  _tM,
  _tN,
  _tRP,
  _tt,
  _TTL,
  _TTSPC,
  _tTSPC,
  _tV,
  _ty,
  _vT,
  _wCAS,
  _wCU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingPolicy = struct(n0, _ASP, 0, [_tTSPC], [() => TargetTrackingScalingPolicyConfiguration]);
export var AutoScalingSettings = struct(n0, _ASS, 0, [_aSD, _mU, _mUa, _sP], [2, 1, 1, () => AutoScalingPolicy]);
export var AutoScalingSpecification = struct(
  n0,
  _ASSu,
  0,
  [_wCAS, _rCAS],
  [() => AutoScalingSettings, () => AutoScalingSettings]
);
export var CapacitySpecificationSummary = struct(n0, _CSS, 0, [_tM, _rCU, _wCU, _lUTPPRT], [0, 1, 1, 4]);
export var CdcSpecificationSummary = struct(n0, _CSSd, 0, [_s, _vT], [0, 0]);
export var ClientSideTimestamps = struct(n0, _CST, 0, [_s], [0]);
export var ClusteringKey = struct(n0, _CK, 0, [_n, _oB], [0, 0]);
export var ColumnDefinition = struct(n0, _CD, 0, [_n, _ty], [0, 0]);
export var Comment = struct(n0, _C, 0, [_m], [0]);
export var EncryptionSpecification = struct(n0, _ES, 0, [_ty, _kKI], [0, 0]);
export var GetKeyspaceRequest = struct(n0, _GKR, 0, [_kN], [0]);
export var GetKeyspaceResponse = struct(
  n0,
  _GKRe,
  0,
  [_kN, _rA, _rSep, _rR, _rGS],
  [0, 0, 0, 64 | 0, () => ReplicationGroupStatusList]
);
export var GetTableAutoScalingSettingsRequest = struct(n0, _GTASSR, 0, [_kN, _tN], [0, 0]);
export var GetTableAutoScalingSettingsResponse = struct(
  n0,
  _GTASSRe,
  0,
  [_kN, _tN, _rA, _aSS, _rSe],
  [0, 0, 0, () => AutoScalingSpecification, () => ReplicaAutoScalingSpecificationList]
);
export var GetTableRequest = struct(n0, _GTR, 0, [_kN, _tN], [0, 0]);
export var GetTableResponse = struct(
  n0,
  _GTRe,
  0,
  [_kN, _tN, _rA, _cT, _s, _sD, _cS, _eS, _pITR, _tt, _dTTL, _co, _cST, _rSe, _lSA, _cSd],
  [
    0,
    0,
    0,
    4,
    0,
    () => SchemaDefinition,
    () => CapacitySpecificationSummary,
    () => EncryptionSpecification,
    () => PointInTimeRecoverySummary,
    () => TimeToLive,
    1,
    () => Comment,
    () => ClientSideTimestamps,
    () => ReplicaSpecificationSummaryList,
    0,
    () => CdcSpecificationSummary,
  ]
);
export var KeyspaceSummary = struct(n0, _KS, 0, [_kN, _rA, _rSep, _rR], [0, 0, 0, 64 | 0]);
export var ListKeyspacesRequest = struct(n0, _LKR, 0, [_nT, _mR], [0, 1]);
export var ListKeyspacesResponse = struct(n0, _LKRi, 0, [_nT, _k], [0, () => KeyspaceSummaryList]);
export var PartitionKey = struct(n0, _PK, 0, [_n], [0]);
export var PointInTimeRecoverySummary = struct(n0, _PITRS, 0, [_s, _eRT], [0, 4]);
export var ReplicaAutoScalingSpecification = struct(n0, _RASS, 0, [_r, _aSS], [0, () => AutoScalingSpecification]);
export var ReplicaSpecificationSummary = struct(n0, _RSS, 0, [_r, _s, _cS], [0, 0, () => CapacitySpecificationSummary]);
export var ReplicationGroupStatus = struct(n0, _RGS, 0, [_r, _kS, _tRP], [0, 0, 0]);
export var SchemaDefinition = struct(
  n0,
  _SD,
  0,
  [_aC, _pK, _cK, _sC],
  [() => ColumnDefinitionList, () => PartitionKeyList, () => ClusteringKeyList, () => StaticColumnList]
);
export var StaticColumn = struct(n0, _SC, 0, [_n], [0]);
export var TargetTrackingScalingPolicyConfiguration = struct(n0, _TTSPC, 0, [_dSI, _sIC, _sOC, _tV], [2, 1, 1, 1]);
export var TimeToLive = struct(n0, _TTL, 0, [_s], [0]);
export var ClusteringKeyList = list(n0, _CKL, 0, () => ClusteringKey);
export var ColumnDefinitionList = list(n0, _CDL, 0, () => ColumnDefinition);
export var KeyspaceSummaryList = list(n0, _KSL, 0, () => KeyspaceSummary);
export var PartitionKeyList = list(n0, _PKL, 0, () => PartitionKey);
export var RegionList = 64 | 0;

export var ReplicaAutoScalingSpecificationList = list(n0, _RASSL, 0, () => ReplicaAutoScalingSpecification);
export var ReplicaSpecificationSummaryList = list(n0, _RSSL, 0, () => ReplicaSpecificationSummary);
export var ReplicationGroupStatusList = list(n0, _RGSL, 0, () => ReplicationGroupStatus);
export var StaticColumnList = list(n0, _SCL, 0, () => StaticColumn);
export var GetKeyspace = op(
  n0,
  _GK,
  0,
  () => GetKeyspaceRequest,
  () => GetKeyspaceResponse
);
export var GetTable = op(
  n0,
  _GT,
  0,
  () => GetTableRequest,
  () => GetTableResponse
);
export var GetTableAutoScalingSettings = op(
  n0,
  _GTASS,
  0,
  () => GetTableAutoScalingSettingsRequest,
  () => GetTableAutoScalingSettingsResponse
);
export var ListKeyspaces = op(
  n0,
  _LK,
  0,
  () => ListKeyspacesRequest,
  () => ListKeyspacesResponse
);
