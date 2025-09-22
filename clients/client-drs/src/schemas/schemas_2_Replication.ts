// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aCDT,
  _aTSDT,
  _aVg,
  _b,
  _bSB,
  _CESS,
  _CESSR,
  _CESSRr,
  _cp,
  _D,
  _Di,
  _di,
  _dN,
  _DRE,
  _dRE,
  _DRI,
  _dRI,
  _DRIa,
  _dRIa,
  _DRIRD,
  _DRIRDa,
  _DRIS,
  _DRISa,
  _dRS,
  _DSSi,
  _DSSRi,
  _e,
  _eDT,
  _eM,
  _eRDl,
  _fBDT,
  _ht,
  _iH,
  _in,
  _jID,
  _lC,
  _LCi,
  _LCLL,
  _LCLLI,
  _lDa,
  _lL,
  _lLR,
  _lSBSDT,
  _lUDT,
  _n,
  _nADT,
  _nI,
  _oAID,
  _oAZ,
  _oR,
  _os,
  _rB,
  _rD,
  _rDep,
  _RDR,
  _RDRR,
  _rDSSA,
  _rE,
  _rII,
  _rIT,
  _rSB,
  _rSBe,
  _s,
  _SA,
  _sA,
  _sAIDt,
  _sAZ,
  _SCP,
  _sCP,
  _sDT,
  _sNI,
  _sNID,
  _sOA,
  _sOAo,
  _SP,
  _sP,
  _SRRta,
  _SRRtar,
  _SRRto,
  _SRRtop,
  _SRt,
  _SRto,
  _SS,
  _sS,
  _sSA,
  _sSID,
  _sSSA,
  _st,
  _t,
  _tSB,
  _ty,
  _vS,
  n0,
  TagsMap,
} from "./schemas_0";
import { Cpus, IdentificationHints, NetworkInterfaces, OS } from "./schemas_5_Describe";

/* eslint no-var: 0 */

export var CreateExtendedSourceServerRequest = struct(n0, _CESSR, 0, [_sSA, _t], [0, [() => TagsMap, 0]]);
export var CreateExtendedSourceServerResponse = struct(n0, _CESSRr, 0, [_sS], [[() => SourceServer, 0]]);
export var DataReplicationError = struct(n0, _DRE, 0, [_e, _rE], [0, 0]);
export var DataReplicationInfo = struct(
  n0,
  _DRI,
  0,
  [_lDa, _eDT, _rD, _dRS, _dRI, _dRE, _sAZ, _sOA],
  [0, 0, () => DataReplicationInfoReplicatedDisks, 0, () => DataReplicationInitiation, () => DataReplicationError, 0, 0]
);
export var DataReplicationInfoReplicatedDisk = struct(
  n0,
  _DRIRD,
  0,
  [_dN, _tSB, _rSB, _rSBe, _bSB, _vS],
  [0, 1, 1, 1, 1, 0]
);
export var DataReplicationInitiation = struct(
  n0,
  _DRIa,
  0,
  [_sDT, _nADT, _s],
  [0, 0, () => DataReplicationInitiationSteps]
);
export var DataReplicationInitiationStep = struct(n0, _DRIS, 0, [_n, _st], [0, 0]);
export var DisconnectSourceServerRequest = struct(n0, _DSSRi, 0, [_sSID], [0]);
export var Disk = struct(n0, _D, 0, [_dN, _b], [0, 1]);
export var LifeCycle = struct(
  n0,
  _LCi,
  0,
  [_aTSDT, _fBDT, _eRDl, _lSBSDT, _lL],
  [0, 0, 0, 0, () => LifeCycleLastLaunch]
);
export var LifeCycleLastLaunch = struct(n0, _LCLL, 0, [_in, _st], [() => LifeCycleLastLaunchInitiated, 0]);
export var LifeCycleLastLaunchInitiated = struct(n0, _LCLLI, 0, [_aCDT, _jID, _ty], [0, 0, 0]);
export var RetryDataReplicationRequest = struct(n0, _RDRR, 0, [_sSID], [0]);
export var SourceCloudProperties = struct(n0, _SCP, 0, [_oAID, _oR, _oAZ, _sOAo], [0, 0, 0, 0]);
export var SourceProperties = struct(
  n0,
  _SP,
  0,
  [_lUDT, _rIT, _iH, _nI, _di, _cp, _rB, _os, _sNI],
  [0, 0, () => IdentificationHints, () => NetworkInterfaces, () => Disks, () => Cpus, 1, () => OS, 2]
);
export var SourceServer = struct(
  n0,
  _SS,
  0,
  [_sSID, _a, _t, _rII, _lLR, _dRIa, _lC, _sP, _sA, _sCP, _rDep, _rDSSA, _sNID, _aVg],
  [
    0,
    0,
    [() => TagsMap, 0],
    0,
    0,
    () => DataReplicationInfo,
    () => LifeCycle,
    () => SourceProperties,
    () => StagingArea,
    () => SourceCloudProperties,
    0,
    0,
    0,
    0,
  ]
);
export var StagingArea = struct(n0, _SA, 0, [_st, _sAIDt, _sSSA, _eM], [0, 0, 0, 0]);
export var StartReplicationRequest = struct(n0, _SRRta, 0, [_sSID], [0]);
export var StartReplicationResponse = struct(n0, _SRRtar, 0, [_sS], [[() => SourceServer, 0]]);
export var StopReplicationRequest = struct(n0, _SRRto, 0, [_sSID], [0]);
export var StopReplicationResponse = struct(n0, _SRRtop, 0, [_sS], [[() => SourceServer, 0]]);
export var DataReplicationInfoReplicatedDisks = list(n0, _DRIRDa, 0, () => DataReplicationInfoReplicatedDisk);
export var DataReplicationInitiationSteps = list(n0, _DRISa, 0, () => DataReplicationInitiationStep);
export var Disks = list(n0, _Di, 0, () => Disk);
export var CreateExtendedSourceServer = op(
  n0,
  _CESS,
  {
    [_ht]: ["POST", "/CreateExtendedSourceServer", 201],
  },
  () => CreateExtendedSourceServerRequest,
  () => CreateExtendedSourceServerResponse
);
export var DisconnectSourceServer = op(
  n0,
  _DSSi,
  {
    [_ht]: ["POST", "/DisconnectSourceServer", 200],
  },
  () => DisconnectSourceServerRequest,
  () => SourceServer
);
export var RetryDataReplication = op(
  n0,
  _RDR,
  {
    [_ht]: ["POST", "/RetryDataReplication", 200],
  },
  () => RetryDataReplicationRequest,
  () => SourceServer
);
export var StartReplication = op(
  n0,
  _SRt,
  {
    [_ht]: ["POST", "/StartReplication", 200],
  },
  () => StartReplicationRequest,
  () => StartReplicationResponse
);
export var StopReplication = op(
  n0,
  _SRto,
  {
    [_ht]: ["POST", "/StopReplication", 200],
  },
  () => StopReplicationRequest,
  () => StopReplicationResponse
);
