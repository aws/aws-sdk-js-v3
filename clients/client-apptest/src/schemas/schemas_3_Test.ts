// smithy-typescript generated code
import { list, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aI,
  _aT,
  _B,
  _b,
  _bJN,
  _bJP,
  _CA,
  _cA,
  _cc,
  _CF,
  _cF,
  _CFA,
  _cFA,
  _cTa,
  _d,
  _DCDC,
  _dCDC,
  _DS,
  _dS,
  _DSL,
  _dTA,
  _eDSN,
  _f,
  _fi,
  _fL,
  _FM,
  _fM,
  _fS,
  _I,
  _i,
  _iDSL,
  _IF,
  _kKI,
  _l,
  _lP,
  _MA,
  _mA,
  _MAP,
  _MAT,
  _MMA,
  _mMA,
  _MMAA,
  _mMAA,
  _MMAP,
  _MNMA,
  _mNMA,
  _MNMAA,
  _mNMAA,
  _n,
  _O,
  _o,
  _OF,
  _p,
  _pa,
  _R,
  _r,
  _RAe,
  _rAe,
  _RL,
  _RT,
  _ru,
  _S,
  _SA,
  _sc,
  _SDM,
  _seq,
  _SL,
  _sL,
  _sLc,
  _sM,
  _SSe,
  _St,
  _t,
  _TC,
  _TDM,
  _tL,
  _tLa,
  _tM,
  _TN,
  _tn,
  _vESN,
  _wAN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Batch = struct(n0, _B, 0, [_bJN, _bJP, _eDSN], [0, 128 | 0, 64 | 0]);
export var CloudFormation = struct(n0, _CF, 0, [_tL, _pa], [0, 128 | 0]);
export var CloudFormationAction = struct(n0, _CFA, 0, [_r, _aT], [0, 0]);
export var CompareAction = struct(n0, _CA, 0, [_i, _o], [() => Input, () => Output]);
export var DatabaseCDC = struct(n0, _DCDC, 0, [_sM, _tM], [() => SourceDatabaseMetadata, () => TargetDatabaseMetadata]);
export var DataSet = struct(n0, _DS, 0, [_t, _n, _cc, _f, _l], [0, 0, 0, 0, 1]);
export var InputFile = struct(n0, _IF, 0, [_sL, _tLa, _fM], [0, 0, () => FileMetadata]);
export var M2ManagedActionProperties = struct(n0, _MMAP, 0, [_fS, _iDSL], [2, 0]);
export var M2ManagedApplication = struct(n0, _MMA, 0, [_aI, _ru, _vESN, _lP], [0, 0, 0, 0]);
export var M2ManagedApplicationAction = struct(n0, _MMAA, 0, [_r, _aT, _p], [0, 0, () => M2ManagedActionProperties]);
export var M2NonManagedApplication = struct(n0, _MNMA, 0, [_vESN, _lP, _ru, _wAN], [0, 0, 0, 0]);
export var M2NonManagedApplicationAction = struct(n0, _MNMAA, 0, [_r, _aT], [0, 0]);
export var MainframeAction = struct(
  n0,
  _MA,
  0,
  [_r, _aT, _p],
  [0, () => MainframeActionType, () => MainframeActionProperties]
);
export var MainframeActionProperties = struct(n0, _MAP, 0, [_dTA], [0]);
export var OutputFile = struct(n0, _OF, 0, [_fL], [0]);
export var Resource = struct(n0, _R, 0, [_n, _t], [0, () => ResourceType]);
export var Script = struct(n0, _S, 0, [_sLc, _t], [0, 0]);
export var ServiceSettings = struct(n0, _SSe, 0, [_kKI], [0]);
export var SourceDatabaseMetadata = struct(n0, _SDM, 0, [_t, _cTa], [0, 0]);
export var Step = struct(n0, _St, 0, [_n, _d, _a], [0, 0, () => StepAction]);
export var TargetDatabaseMetadata = struct(n0, _TDM, 0, [_t, _cTa], [0, 0]);
export var TN3270 = struct(n0, _TN, 0, [_sc, _eDSN], [() => Script, 64 | 0]);
export var DataSetList = list(n0, _DSL, 0, () => DataSet);
export var ExportDataSetNames = 64 | 0;

export var ResourceList = list(n0, _RL, 0, () => Resource);
export var StepList = list(n0, _SL, 0, () => Step);
export var TestCaseList = 64 | 0;

export var BatchJobParameters = 128 | 0;

export var Properties = 128 | 0;

export var FileMetadata = uni(n0, _FM, 0, [_dS, _dCDC], [() => DataSetList, () => DatabaseCDC]);
export var Input = uni(n0, _I, 0, [_fi], [() => InputFile]);
export var MainframeActionType = uni(n0, _MAT, 0, [_b, _tn], [() => Batch, () => TN3270]);
export var Output = uni(n0, _O, 0, [_fi], [() => OutputFile]);
export var ResourceAction = uni(
  n0,
  _RAe,
  0,
  [_mMAA, _mNMAA, _cFA],
  [() => M2ManagedApplicationAction, () => M2NonManagedApplicationAction, () => CloudFormationAction]
);
export var ResourceType = uni(
  n0,
  _RT,
  0,
  [_cF, _mMA, _mNMA],
  [() => CloudFormation, () => M2ManagedApplication, () => M2NonManagedApplication]
);
export var StepAction = uni(
  n0,
  _SA,
  0,
  [_rAe, _mA, _cA],
  [() => ResourceAction, () => MainframeAction, () => CompareAction]
);
export var TestCases = uni(n0, _TC, 0, [_seq], [64 | 0]);
