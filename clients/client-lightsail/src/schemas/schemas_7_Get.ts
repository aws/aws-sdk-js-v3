// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aDc,
  _ADM,
  _aDM,
  _aF,
  _aMS,
  _AO,
  _aO,
  _AOL,
  _AOR,
  _aOR,
  _AORL,
  _aOT,
  _aS,
  _ASAOR,
  _aSAOR,
  _aT,
  _aTc,
  _aZ,
  _bI,
  _bIu,
  _bNl,
  _cA,
  _cC,
  _CD,
  _CDFS,
  _CDFSR,
  _CDFSRr,
  _CDR,
  _CDRr,
  _ci,
  _CIFS,
  _CIFSR,
  _CIFSRr,
  _cIN,
  _CIR,
  _CIr,
  _CIRr,
  _cLA,
  _cNom,
  _D,
  _disk,
  _disks,
  _DL,
  _DM,
  _DML,
  _dNi,
  _dSN,
  _du,
  _EAO,
  _EAOR,
  _EAORn,
  _fAD,
  _fBI,
  _fBIr,
  _fIA,
  _fIN,
  _fPr,
  _GD,
  _GDe,
  _GDR,
  _GDRe,
  _GDRet,
  _GDReti,
  _GI,
  _GIe,
  _GIR,
  _GIRe,
  _GIRet,
  _GIRetn,
  _GIS,
  _GISe,
  _GISR,
  _GISRe,
  _GISRet,
  _GISRetn,
  _gIU,
  _gPMA,
  _h,
  _hEt,
  _hPI,
  _hPRHL,
  _ht,
  _hTt,
  _I,
  _iAp,
  _iAst,
  _iAT,
  _iC,
  _iFAS,
  _IH,
  _IL,
  _IMO,
  _IN,
  _iN,
  _in,
  _iNn,
  _ins,
  _io,
  _IPI,
  _IPIL,
  _IS,
  _iSD,
  _iSIs,
  _ISL,
  _iSN,
  _iSn,
  _iSns,
  _kPN,
  _l,
  _mO,
  _MT,
  _mT,
  _n,
  _nDN,
  _ne,
  _nPT,
  _nSTOD,
  _o,
  _oDP,
  _pa,
  _pIA,
  _pIAu,
  _por,
  _pro,
  _prog,
  _pT,
  _rD,
  _rN,
  _rSIG,
  _rT,
  _s,
  _sC,
  _sDN,
  _sIG,
  _sINo,
  _SIOIR,
  _sIOIR,
  _sKN,
  _sta,
  _sTOD,
  _ta,
  _th,
  _tPo,
  _uD,
  _uLRAS,
  _us,
  n0,
  OperationList,
  ResourceLocation,
  TagList,
} from "./schemas_0";
import { InstanceState } from "./schemas_87_Get";

/* eslint no-var: 0 */

export var AddOn = struct(n0, _AO, 0, [_n, _s, _sTOD, _nSTOD, _th, _du], [0, 0, 0, 0, 0, 0]);
export var AddOnRequest = struct(
  n0,
  _AOR,
  0,
  [_aOT, _aSAOR, _sIOIR],
  [0, () => AutoSnapshotAddOnRequest, () => StopInstanceOnIdleRequest]
);
export var AutoSnapshotAddOnRequest = struct(n0, _ASAOR, 0, [_sTOD], [0]);
export var CreateDiskFromSnapshotRequest = struct(
  n0,
  _CDFSR,
  0,
  [_dNi, _dSN, _aZ, _sIG, _ta, _aO, _sDN, _rD, _uLRAS],
  [0, 0, 0, 1, () => TagList, () => AddOnRequestList, 0, 0, 2]
);
export var CreateDiskFromSnapshotResult = struct(n0, _CDFSRr, 0, [_o], [() => OperationList]);
export var CreateDiskRequest = struct(
  n0,
  _CDR,
  0,
  [_dNi, _aZ, _sIG, _ta, _aO],
  [0, 0, 1, () => TagList, () => AddOnRequestList]
);
export var CreateDiskResult = struct(n0, _CDRr, 0, [_o], [() => OperationList]);
export var CreateInstancesFromSnapshotRequest = struct(
  n0,
  _CIFSR,
  0,
  [_iNn, _aDM, _aZ, _iSN, _bIu, _uD, _kPN, _ta, _aO, _iAT, _sINo, _rD, _uLRAS],
  [64 | 0, () => AttachedDiskMap, 0, 0, 0, 0, 0, () => TagList, () => AddOnRequestList, 0, 0, 0, 2]
);
export var CreateInstancesFromSnapshotResult = struct(n0, _CIFSRr, 0, [_o], [() => OperationList]);
export var CreateInstancesRequest = struct(
  n0,
  _CIR,
  0,
  [_iNn, _aZ, _cIN, _bI, _bIu, _uD, _kPN, _ta, _aO, _iAT],
  [64 | 0, 0, 0, 0, 0, 0, 0, () => TagList, () => AddOnRequestList, 0]
);
export var CreateInstancesResult = struct(n0, _CIRr, 0, [_o], [() => OperationList]);
export var Disk = struct(
  n0,
  _D,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _aO, _sIG, _iSD, _io, _pa, _sta, _aT, _iAst, _aS, _gIU, _aMS],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, () => AddOnList, 1, 2, 1, 0, 0, 0, 2, 0, 1, 0]
);
export var DiskMap = struct(n0, _DM, 0, [_oDP, _nDN], [0, 0]);
export var EnableAddOnRequest = struct(n0, _EAOR, 0, [_rN, _aOR], [0, () => AddOnRequest]);
export var EnableAddOnResult = struct(n0, _EAORn, 0, [_o], [() => OperationList]);
export var GetDiskRequest = struct(n0, _GDR, 0, [_dNi], [0]);
export var GetDiskResult = struct(n0, _GDRe, 0, [_disk], [() => Disk]);
export var GetDisksRequest = struct(n0, _GDRet, 0, [_pT], [0]);
export var GetDisksResult = struct(n0, _GDReti, 0, [_disks, _nPT], [() => DiskList, 0]);
export var GetInstanceRequest = struct(n0, _GIR, 0, [_iN], [0]);
export var GetInstanceResult = struct(n0, _GIRe, 0, [_ins], [() => Instance]);
export var GetInstanceSnapshotRequest = struct(n0, _GISR, 0, [_iSN], [0]);
export var GetInstanceSnapshotResult = struct(n0, _GISRe, 0, [_iSn], [() => InstanceSnapshot]);
export var GetInstanceSnapshotsRequest = struct(n0, _GISRet, 0, [_pT], [0]);
export var GetInstanceSnapshotsResult = struct(n0, _GISRetn, 0, [_iSns, _nPT], [() => InstanceSnapshotList, 0]);
export var GetInstancesRequest = struct(n0, _GIRet, 0, [_pT], [0]);
export var GetInstancesResult = struct(n0, _GIRetn, 0, [_in, _nPT], [() => InstanceList, 0]);
export var Instance = struct(
  n0,
  _I,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _bI, _bNl, _bIu, _aO, _iSIs, _pIA, _pIAu, _iAp, _iAT, _h, _ne, _sta, _us, _sKN, _mO],
  [
    0,
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    () => TagList,
    0,
    0,
    0,
    () => AddOnList,
    2,
    0,
    0,
    64 | 0,
    0,
    () => InstanceHardware,
    () => InstanceNetworking,
    () => InstanceState,
    0,
    0,
    () => InstanceMetadataOptions,
  ]
);
export var InstanceHardware = struct(n0, _IH, 0, [_cC, _disks, _rSIG], [1, () => DiskList, 1]);
export var InstanceMetadataOptions = struct(n0, _IMO, 0, [_sta, _hTt, _hEt, _hPRHL, _hPI], [0, 0, 0, 1, 0]);
export var InstanceNetworking = struct(n0, _IN, 0, [_mT, _por], [() => MonthlyTransfer, () => InstancePortInfoList]);
export var InstancePortInfo = struct(
  n0,
  _IPI,
  0,
  [_fPr, _tPo, _pro, _aF, _aTc, _cNom, _aDc, _ci, _iC, _cLA],
  [1, 1, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0]
);
export var InstanceSnapshot = struct(
  n0,
  _IS,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _sta, _prog, _fAD, _fIN, _fIA, _fBI, _fBIr, _iFAS, _sIG],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, 0, 0, () => DiskList, 0, 0, 0, 0, 2, 1]
);
export var MonthlyTransfer = struct(n0, _MT, 0, [_gPMA], [1]);
export var StopInstanceOnIdleRequest = struct(n0, _SIOIR, 0, [_th, _du], [0, 0]);
export var AddOnList = list(n0, _AOL, 0, () => AddOn);
export var AddOnRequestList = list(n0, _AORL, 0, () => AddOnRequest);
export var DiskList = list(n0, _DL, 0, () => Disk);
export var DiskMapList = list(n0, _DML, 0, () => DiskMap);
export var InstanceList = list(n0, _IL, 0, () => Instance);
export var InstancePortInfoList = list(n0, _IPIL, 0, () => InstancePortInfo);
export var InstanceSnapshotList = list(n0, _ISL, 0, () => InstanceSnapshot);
export var AttachedDiskMap = map(n0, _ADM, 0, 0, () => DiskMapList);
export var CreateDisk = op(
  n0,
  _CD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDisk", 200],
  },
  () => CreateDiskRequest,
  () => CreateDiskResult
);
export var CreateDiskFromSnapshot = op(
  n0,
  _CDFS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDiskFromSnapshot", 200],
  },
  () => CreateDiskFromSnapshotRequest,
  () => CreateDiskFromSnapshotResult
);
export var CreateInstances = op(
  n0,
  _CIr,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateInstances", 200],
  },
  () => CreateInstancesRequest,
  () => CreateInstancesResult
);
export var CreateInstancesFromSnapshot = op(
  n0,
  _CIFS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateInstancesFromSnapshot", 200],
  },
  () => CreateInstancesFromSnapshotRequest,
  () => CreateInstancesFromSnapshotResult
);
export var EnableAddOn = op(
  n0,
  _EAO,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/EnableAddOn", 200],
  },
  () => EnableAddOnRequest,
  () => EnableAddOnResult
);
export var GetDisk = op(
  n0,
  _GD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDisk", 200],
  },
  () => GetDiskRequest,
  () => GetDiskResult
);
export var GetDisks = op(
  n0,
  _GDe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDisks", 200],
  },
  () => GetDisksRequest,
  () => GetDisksResult
);
export var GetInstance = op(
  n0,
  _GI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstance", 200],
  },
  () => GetInstanceRequest,
  () => GetInstanceResult
);
export var GetInstances = op(
  n0,
  _GIe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstances", 200],
  },
  () => GetInstancesRequest,
  () => GetInstancesResult
);
export var GetInstanceSnapshot = op(
  n0,
  _GIS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstanceSnapshot", 200],
  },
  () => GetInstanceSnapshotRequest,
  () => GetInstanceSnapshotResult
);
export var GetInstanceSnapshots = op(
  n0,
  _GISe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstanceSnapshots", 200],
  },
  () => GetInstanceSnapshotsRequest,
  () => GetInstanceSnapshotsResult
);
