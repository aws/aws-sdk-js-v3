// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _a,
  _aCDT,
  _aID,
  _aIID,
  _aTSDT,
  _b,
  _bSB,
  _cA,
  _cAo,
  _cor,
  _Cp,
  _cp,
  _CPU,
  _cSA,
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
  _e,
  _eDT,
  _eIID,
  _eRD,
  _fB,
  _fBDT,
  _fFAF,
  _fi,
  _fq,
  _fS,
  _h,
  _iA,
  _IH,
  _iH,
  _in,
  _iP,
  _ip,
  _jID,
  _lC,
  _lCa,
  _LCi,
  _LCLC,
  _LCLCF,
  _LCLCI,
  _LCLCR,
  _LCLT,
  _LCLTF,
  _LCLTI,
  _LCLTR,
  _lDa,
  _LI,
  _lI,
  _lSBSDT,
  _lSDT,
  _lT,
  _lUDTa,
  _mA,
  _mN,
  _n,
  _nADT,
  _NI,
  _nI,
  _NIe,
  _OS,
  _os,
  _r,
  _rB,
  _rD,
  _rE,
  _rIT,
  _rSB,
  _rSBe,
  _rTep,
  _s,
  _sDT,
  _SP,
  _sP,
  _SS,
  _SSCA,
  _sSIDo,
  _st,
  _sta,
  _t,
  _tSB,
  _uPID,
  _vCID,
  _vP,
  _vWU,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CPU = struct(n0, _CPU, 0, [_cor, _mN], [1, 0]);
export var DataReplicationError = struct(n0, _DRE, 0, [_e, _rE], [0, 0]);
export var DataReplicationInfo = struct(
  n0,
  _DRI,
  0,
  [_lDa, _eDT, _rD, _dRS, _dRI, _dRE, _lSDT],
  [0, 0, () => DataReplicationInfoReplicatedDisks, 0, () => DataReplicationInitiation, () => DataReplicationError, 0]
);
export var DataReplicationInfoReplicatedDisk = struct(n0, _DRIRD, 0, [_dN, _tSB, _rSB, _rSBe, _bSB], [0, 1, 1, 1, 1]);
export var DataReplicationInitiation = struct(
  n0,
  _DRIa,
  0,
  [_sDT, _nADT, _st],
  [0, 0, () => DataReplicationInitiationSteps]
);
export var DataReplicationInitiationStep = struct(n0, _DRIS, 0, [_n, _sta], [0, 0]);
export var Disk = struct(n0, _D, 0, [_dN, _b], [0, 1]);
export var IdentificationHints = struct(n0, _IH, 0, [_fq, _h, _vWU, _aIID, _vP], [0, 0, 0, 0, 0]);
export var LaunchedInstance = struct(n0, _LI, 0, [_eIID, _jID, _fB], [0, 0, 0]);
export var LifeCycle = struct(
  n0,
  _LCi,
  0,
  [_aTSDT, _fBDT, _eRD, _lSBSDT, _lT, _lCa, _s],
  [0, 0, 0, 0, () => LifeCycleLastTest, () => LifeCycleLastCutover, 0]
);
export var LifeCycleLastCutover = struct(
  n0,
  _LCLC,
  0,
  [_in, _r, _fi],
  [() => LifeCycleLastCutoverInitiated, () => LifeCycleLastCutoverReverted, () => LifeCycleLastCutoverFinalized]
);
export var LifeCycleLastCutoverFinalized = struct(n0, _LCLCF, 0, [_aCDT], [0]);
export var LifeCycleLastCutoverInitiated = struct(n0, _LCLCI, 0, [_aCDT, _jID], [0, 0]);
export var LifeCycleLastCutoverReverted = struct(n0, _LCLCR, 0, [_aCDT], [0]);
export var LifeCycleLastTest = struct(
  n0,
  _LCLT,
  0,
  [_in, _r, _fi],
  [() => LifeCycleLastTestInitiated, () => LifeCycleLastTestReverted, () => LifeCycleLastTestFinalized]
);
export var LifeCycleLastTestFinalized = struct(n0, _LCLTF, 0, [_aCDT], [0]);
export var LifeCycleLastTestInitiated = struct(n0, _LCLTI, 0, [_aCDT, _jID], [0, 0]);
export var LifeCycleLastTestReverted = struct(n0, _LCLTR, 0, [_aCDT], [0]);
export var NetworkInterface = struct(n0, _NI, 0, [_mA, _ip, _iP], [0, 64 | 0, 2]);
export var OS = struct(n0, _OS, 0, [_fS], [0]);
export var SourceProperties = struct(
  n0,
  _SP,
  0,
  [_lUDTa, _rIT, _iH, _nI, _di, _cp, _rB, _os],
  [0, 0, () => IdentificationHints, () => NetworkInterfaces, () => Disks, () => Cpus, 1, () => OS]
);
export var SourceServer = struct(
  n0,
  _SS,
  0,
  [_sSIDo, _a, _iA, _t, _lI, _dRIa, _lC, _sP, _rTep, _vCID, _aID, _uPID, _fFAF, _cA],
  [
    0,
    0,
    2,
    [() => TagsMap, 0],
    () => LaunchedInstance,
    () => DataReplicationInfo,
    () => LifeCycle,
    () => SourceProperties,
    0,
    0,
    0,
    0,
    0,
    () => SourceServerConnectorAction,
  ]
);
export var SourceServerConnectorAction = struct(n0, _SSCA, 0, [_cSA, _cAo], [0, 0]);
export var Cpus = list(n0, _Cp, 0, () => CPU);
export var DataReplicationInfoReplicatedDisks = list(n0, _DRIRDa, 0, () => DataReplicationInfoReplicatedDisk);
export var DataReplicationInitiationSteps = list(n0, _DRISa, 0, () => DataReplicationInitiationStep);
export var Disks = list(n0, _Di, 0, () => Disk);
export var IPsList = 64 | 0;

export var NetworkInterfaces = list(n0, _NIe, 0, () => NetworkInterface);
