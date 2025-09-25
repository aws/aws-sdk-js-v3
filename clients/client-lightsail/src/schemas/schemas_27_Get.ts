// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CFSR,
  _cFSR,
  _CFSRL,
  _CFSRSI,
  _CFSRSIL,
  _DI,
  _dI,
  _DIi,
  _DIL,
  _DSI,
  _dSI,
  _ESR,
  _eSR,
  _ESRL,
  _ESRSI,
  _fBI,
  _fBIr,
  _fDI,
  _fRA,
  _fRN,
  _GCFSR,
  _GCFSRR,
  _GCFSRRe,
  _GESR,
  _GESRR,
  _GESRRe,
  _ht,
  _id,
  _iSD,
  _ISI,
  _iSI,
  _l,
  _n,
  _nPT,
  _pa,
  _pT,
  _rT,
  _ser,
  _sI,
  _sIG,
  _sta,
  n0,
  ResourceLocation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFormationStackRecord = struct(
  n0,
  _CFSR,
  0,
  [_n, _a, _cA, _l, _rT, _sta, _sI, _dI],
  [0, 0, 4, () => ResourceLocation, 0, 0, () => CloudFormationStackRecordSourceInfoList, () => DestinationInfo]
);
export var CloudFormationStackRecordSourceInfo = struct(n0, _CFSRSI, 0, [_rT, _n, _a], [0, 0, 0]);
export var DestinationInfo = struct(n0, _DI, 0, [_id, _ser], [0, 0]);
export var DiskInfo = struct(n0, _DIi, 0, [_n, _pa, _sIG, _iSD], [0, 0, 1, 2]);
export var DiskSnapshotInfo = struct(n0, _DSI, 0, [_sIG], [1]);
export var ExportSnapshotRecord = struct(
  n0,
  _ESR,
  0,
  [_n, _a, _cA, _l, _rT, _sta, _sI, _dI],
  [0, 0, 4, () => ResourceLocation, 0, 0, () => ExportSnapshotRecordSourceInfo, () => DestinationInfo]
);
export var ExportSnapshotRecordSourceInfo = struct(
  n0,
  _ESRSI,
  0,
  [_rT, _cA, _n, _a, _fRN, _fRA, _iSI, _dSI],
  [0, 4, 0, 0, 0, 0, () => InstanceSnapshotInfo, () => DiskSnapshotInfo]
);
export var GetCloudFormationStackRecordsRequest = struct(n0, _GCFSRR, 0, [_pT], [0]);
export var GetCloudFormationStackRecordsResult = struct(
  n0,
  _GCFSRRe,
  0,
  [_cFSR, _nPT],
  [() => CloudFormationStackRecordList, 0]
);
export var GetExportSnapshotRecordsRequest = struct(n0, _GESRR, 0, [_pT], [0]);
export var GetExportSnapshotRecordsResult = struct(n0, _GESRRe, 0, [_eSR, _nPT], [() => ExportSnapshotRecordList, 0]);
export var InstanceSnapshotInfo = struct(n0, _ISI, 0, [_fBIr, _fBI, _fDI], [0, 0, () => DiskInfoList]);
export var CloudFormationStackRecordList = list(n0, _CFSRL, 0, () => CloudFormationStackRecord);
export var CloudFormationStackRecordSourceInfoList = list(n0, _CFSRSIL, 0, () => CloudFormationStackRecordSourceInfo);
export var DiskInfoList = list(n0, _DIL, 0, () => DiskInfo);
export var ExportSnapshotRecordList = list(n0, _ESRL, 0, () => ExportSnapshotRecord);
export var GetCloudFormationStackRecords = op(
  n0,
  _GCFSR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetCloudFormationStackRecords", 200],
  },
  () => GetCloudFormationStackRecordsRequest,
  () => GetCloudFormationStackRecordsResult
);
export var GetExportSnapshotRecords = op(
  n0,
  _GESR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetExportSnapshotRecords", 200],
  },
  () => GetExportSnapshotRecordsRequest,
  () => GetExportSnapshotRecordsResult
);
