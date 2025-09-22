// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidSnapshotStateFault as __InvalidSnapshotStateFault } from "../models/index";
import {
  _AF,
  _AMVU,
  _aQE,
  _ARN,
  _AZ,
  _AZL,
  _c,
  _CCCT,
  _CCIa,
  _CNCT,
  _CNI,
  _CNT,
  _CPGN,
  _CSa,
  _CSGNa,
  _CSM,
  _CSo,
  _CSR,
  _DSel,
  _DSes,
  _DSLM,
  _DSM,
  _DSMe,
  _DSR,
  _DTa,
  _E,
  _e,
  _EV,
  _hE,
  _ISSF,
  _KKI,
  _M,
  _m,
  _MR,
  _NCN,
  _NGC,
  _NGI,
  _NNG,
  _NS,
  _NSL,
  _NSo,
  _OA,
  _OAL,
  _PAZ,
  _PAZr,
  _PAZri,
  _PMW,
  _Po,
  _POA,
  _POAri,
  _RAZ,
  _RCep,
  _RCes,
  _RCLes,
  _RGD,
  _RGIe,
  _ROA,
  _SCT,
  _SL,
  _Sl,
  _SN,
  _Sn,
  _Sna,
  _SNGC,
  _SRL,
  _SS,
  _SSN,
  _SSn,
  _SW,
  _T,
  _TA,
  _TB,
  _TSN,
  _VI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CopySnapshotMessage = struct(n0, _CSM, 0, [_SSN, _TSN, _TB, _KKI, _T], [0, 0, 0, 0, [() => TagList, 0]]);
export var CopySnapshotResult = struct(n0, _CSR, 0, [_Sn], [[() => Snapshot, 0]]);
export var DeleteSnapshotMessage = struct(n0, _DSM, 0, [_SN], [0]);
export var DeleteSnapshotResult = struct(n0, _DSR, 0, [_Sn], [[() => Snapshot, 0]]);
export var DescribeSnapshotsListMessage = struct(n0, _DSLM, 0, [_M, _Sna], [0, [() => SnapshotList, 0]]);
export var DescribeSnapshotsMessage = struct(
  n0,
  _DSMe,
  0,
  [_RGIe, _CCIa, _SN, _SS, _M, _MR, _SNGC],
  [0, 0, 0, 0, 0, 1, 2]
);
export var InvalidSnapshotStateFault = error(
  n0,
  _ISSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSnapshotState`, 400],
  },
  [_m],
  [0],

  __InvalidSnapshotStateFault
);
export var NodeGroupConfiguration = struct(
  n0,
  _NGC,
  0,
  [_NGI, _Sl, _RCep, _PAZri, _RAZ, _POAri, _ROA],
  [0, 0, 1, 0, [() => AvailabilityZonesList, 0], 0, [() => OutpostArnsList, 0]]
);
export var NodeSnapshot = struct(
  n0,
  _NS,
  0,
  [_CCIa, _NGI, _CNI, _NGC, _CSa, _CNCT, _SCT],
  [0, 0, 0, [() => NodeGroupConfiguration, 0], 0, 4, 4]
);
export var ReshardingConfiguration = struct(n0, _RCes, 0, [_NGI, _PAZr], [0, [() => AvailabilityZonesList, 0]]);
export var Snapshot = struct(
  n0,
  _Sn,
  0,
  [
    _SN,
    _RGIe,
    _RGD,
    _CCIa,
    _SSn,
    _SS,
    _CNT,
    _E,
    _EV,
    _NCN,
    _PAZ,
    _POA,
    _CCCT,
    _PMW,
    _TA,
    _Po,
    _CPGN,
    _CSGNa,
    _VI,
    _AMVU,
    _SRL,
    _SW,
    _NNG,
    _AF,
    _NSo,
    _KKI,
    _ARN,
    _DTa,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 1, 0, 0, 0, 2, 1, 0, 1, 0, [() => NodeSnapshotList, 0], 0, 0, 0]
);
export var AvailabilityZonesList = list(n0, _AZL, 0, [
  0,
  {
    [_xN]: _AZ,
  },
]);
export var NodeSnapshotList = list(n0, _NSL, 0, [
  () => NodeSnapshot,
  {
    [_xN]: _NS,
  },
]);
export var OutpostArnsList = list(n0, _OAL, 0, [
  0,
  {
    [_xN]: _OA,
  },
]);
export var ReshardingConfigurationList = list(n0, _RCLes, 0, [
  () => ReshardingConfiguration,
  {
    [_xN]: _RCes,
  },
]);
export var SnapshotList = list(n0, _SL, 0, [
  () => Snapshot,
  {
    [_xN]: _Sn,
  },
]);
export var CopySnapshot = op(
  n0,
  _CSo,
  0,
  () => CopySnapshotMessage,
  () => CopySnapshotResult
);
export var DeleteSnapshot = op(
  n0,
  _DSel,
  0,
  () => DeleteSnapshotMessage,
  () => DeleteSnapshotResult
);
export var DescribeSnapshots = op(
  n0,
  _DSes,
  0,
  () => DescribeSnapshotsMessage,
  () => DescribeSnapshotsListMessage
);
