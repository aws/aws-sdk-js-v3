// smithy-typescript generated code
import { list, map, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAn,
  _CC,
  _cTr,
  _DC,
  _dC,
  _DPD,
  _dPD,
  _eq,
  _ILC,
  _iLC,
  _ILS,
  _iLS,
  _lMT,
  _mRLFI,
  _nE,
  _oAr,
  _ODC,
  _RMBF,
  _RMF,
  _rMF,
  _RMFL,
  _RMM,
  _s,
  _SD,
  _sU,
  _TDC,
  _TDr,
  _tDr,
  _tL,
  _TM,
  _TMC,
  _tMC,
  _tMI,
  _uPR,
  _V,
  _Va,
  _val,
  _VD,
  _vD,
  _VDC,
  _vL,
  _VM,
  _VMa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataProcessingDetails = struct(n0, _DPD, 0, [_s, _cTr, _lMT], [0, 5, 5]);
export var DistillationConfig = struct(n0, _DC, 0, [_tMC], [() => TeacherModelConfig]);
export var InvocationLogsConfig = struct(
  n0,
  _ILC,
  0,
  [_uPR, _iLS, _rMF],
  [2, () => InvocationLogSource, [() => RequestMetadataFilters, 0]]
);
export var OutputDataConfig = struct(n0, _ODC, 0, [_sU], [0]);
export var RequestMetadataBaseFilters = struct(
  n0,
  _RMBF,
  0,
  [_eq, _nE],
  [
    [() => RequestMetadataMap, 0],
    [() => RequestMetadataMap, 0],
  ]
);
export var StatusDetails = struct(
  n0,
  _SD,
  0,
  [_vD, _dPD, _tDr],
  [() => ValidationDetails, () => DataProcessingDetails, () => TrainingDetails]
);
export var TeacherModelConfig = struct(n0, _TMC, 0, [_tMI, _mRLFI], [0, 1]);
export var TrainingDataConfig = struct(n0, _TDC, 0, [_sU, _iLC], [0, [() => InvocationLogsConfig, 0]]);
export var TrainingDetails = struct(n0, _TDr, 0, [_s, _cTr, _lMT], [0, 5, 5]);
export var TrainingMetrics = struct(n0, _TM, 0, [_tL], [1]);
export var ValidationDataConfig = struct(n0, _VDC, 0, [_val], [() => Validators]);
export var ValidationDetails = struct(n0, _VD, 0, [_s, _cTr, _lMT], [0, 5, 5]);
export var Validator = struct(n0, _V, 0, [_sU], [0]);
export var ValidatorMetric = struct(n0, _VM, 0, [_vL], [1]);
export var RequestMetadataFiltersList = list(n0, _RMFL, 0, [() => RequestMetadataBaseFilters, 0]);
export var ValidationMetrics = list(n0, _VMa, 0, () => ValidatorMetric);
export var Validators = list(n0, _Va, 0, () => Validator);
export var ModelCustomizationHyperParameters = 128 | 0;

export var RequestMetadataMap = map(n0, _RMM, 8, 0, 0);
export var CustomizationConfig = uni(n0, _CC, 0, [_dC], [() => DistillationConfig]);
export var InvocationLogSource = uni(n0, _ILS, 0, [_sU], [0]);
export var RequestMetadataFilters = uni(
  n0,
  _RMF,
  0,
  [_eq, _nE, _aAn, _oAr],
  [
    [() => RequestMetadataMap, 0],
    [() => RequestMetadataMap, 0],
    [() => RequestMetadataFiltersList, 0],
    [() => RequestMetadataFiltersList, 0],
  ]
);
