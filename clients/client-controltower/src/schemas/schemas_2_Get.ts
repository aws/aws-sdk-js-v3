// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bI,
  _bIa,
  _BO,
  _bO,
  _bV,
  _cI,
  _cIo,
  _CO,
  _cO,
  _COF,
  _COo,
  _cOo,
  _COS,
  _cOT,
  _dS,
  _dSr,
  _DSS,
  _dSS,
  _EB,
  _eB,
  _EBD,
  _eBD,
  _EBDSS,
  _EBDT,
  _EBF,
  _eBI,
  _EBID,
  _EBPS,
  _EBPSn,
  _EBS,
  _EC,
  _eC,
  _ECD,
  _eCD,
  _ECF,
  _eCI,
  _eCIn,
  _ECPS,
  _ECPSn,
  _ECS,
  _ESS,
  _eT,
  _f,
  _GBOe,
  _GBOI,
  _GBOO,
  _GCO,
  _GCOI,
  _GCOO,
  _GEB,
  _GEBI,
  _GEBO,
  _GEC,
  _GECI,
  _GECO,
  _GLZ,
  _GLZI,
  _GLZO,
  _GLZOe,
  _GLZOI,
  _GLZOO,
  _h,
  _i,
  _iC,
  _iDS,
  _k,
  _lAV,
  _LCO,
  _LCOI,
  _LCOO,
  _LEB,
  _LEBI,
  _LEBO,
  _LEC,
  _LECI,
  _LECO,
  _LLZOI,
  _LLZOi,
  _LLZOO,
  _lOI,
  _lZ,
  _LZD,
  _LZDSS,
  _lZI,
  _LZO,
  _lZO,
  _LZOD,
  _LZOF,
  _LZOS,
  _ma,
  _mR,
  _n,
  _nT,
  _oD,
  _oI,
  _oT,
  _p,
  _pI,
  _pIa,
  _R,
  _s,
  _sM,
  _sS,
  _sT,
  _st,
  _tI,
  _tIa,
  _TR,
  _tR,
  _ty,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BaselineOperation = struct(n0, _BO, 0, [_oI, _oT, _s, _sT, _eT, _sM], [0, 0, 0, 5, 5, 0]);
export var ControlOperation = struct(
  n0,
  _CO,
  0,
  [_oT, _sT, _eT, _s, _sM, _oI, _cI, _tI, _eCI],
  [0, 5, 5, 0, 0, 0, 0, 0, 0]
);
export var ControlOperationFilter = struct(
  n0,
  _COF,
  0,
  [_cIo, _tIa, _eCIn, _st, _cOT],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ControlOperationSummary = struct(
  n0,
  _COS,
  0,
  [_oT, _sT, _eT, _s, _sM, _oI, _cI, _tI, _eCI],
  [0, 5, 5, 0, 0, 0, 0, 0, 0]
);
export var DriftStatusSummary = struct(n0, _DSS, 0, [_dS], [0]);
export var EnabledBaselineDetails = struct(
  n0,
  _EBD,
  0,
  [_a, _bI, _bV, _dSS, _tI, _pI, _sS, _p],
  [
    0,
    0,
    0,
    () => EnabledBaselineDriftStatusSummary,
    0,
    0,
    () => EnablementStatusSummary,
    () => EnabledBaselineParameterSummaries,
  ]
);
export var EnabledBaselineDriftStatusSummary = struct(n0, _EBDSS, 0, [_ty], [() => EnabledBaselineDriftTypes]);
export var EnabledBaselineDriftTypes = struct(n0, _EBDT, 0, [_i], [() => EnabledBaselineInheritanceDrift]);
export var EnabledBaselineFilter = struct(
  n0,
  _EBF,
  0,
  [_tIa, _bIa, _pIa, _st, _iDS],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var EnabledBaselineInheritanceDrift = struct(n0, _EBID, 0, [_s], [0]);
export var EnabledBaselineParameterSummary = struct(n0, _EBPS, 0, [_k, _va], [0, 15]);
export var EnabledBaselineSummary = struct(
  n0,
  _EBS,
  0,
  [_a, _bI, _bV, _dSS, _tI, _pI, _sS],
  [0, 0, 0, () => EnabledBaselineDriftStatusSummary, 0, 0, () => EnablementStatusSummary]
);
export var EnabledControlDetails = struct(
  n0,
  _ECD,
  0,
  [_a, _cI, _tI, _tR, _sS, _dSS, _p],
  [
    0,
    0,
    0,
    () => TargetRegions,
    () => EnablementStatusSummary,
    () => DriftStatusSummary,
    () => EnabledControlParameterSummaries,
  ]
);
export var EnabledControlFilter = struct(n0, _ECF, 0, [_cIo, _st, _dSr], [64 | 0, 64 | 0, 64 | 0]);
export var EnabledControlParameterSummary = struct(n0, _ECPS, 0, [_k, _va], [0, 15]);
export var EnabledControlSummary = struct(
  n0,
  _ECS,
  0,
  [_cI, _a, _tI, _sS, _dSS],
  [0, 0, 0, () => EnablementStatusSummary, () => DriftStatusSummary]
);
export var EnablementStatusSummary = struct(n0, _ESS, 0, [_s, _lOI], [0, 0]);
export var GetBaselineOperationInput = struct(n0, _GBOI, 0, [_oI], [0]);
export var GetBaselineOperationOutput = struct(n0, _GBOO, 0, [_bO], [() => BaselineOperation]);
export var GetControlOperationInput = struct(n0, _GCOI, 0, [_oI], [0]);
export var GetControlOperationOutput = struct(n0, _GCOO, 0, [_cO], [() => ControlOperation]);
export var GetEnabledBaselineInput = struct(n0, _GEBI, 0, [_eBI], [0]);
export var GetEnabledBaselineOutput = struct(n0, _GEBO, 0, [_eBD], [() => EnabledBaselineDetails]);
export var GetEnabledControlInput = struct(n0, _GECI, 0, [_eCI], [0]);
export var GetEnabledControlOutput = struct(n0, _GECO, 0, [_eCD], [() => EnabledControlDetails]);
export var GetLandingZoneInput = struct(n0, _GLZI, 0, [_lZI], [0]);
export var GetLandingZoneOperationInput = struct(n0, _GLZOI, 0, [_oI], [0]);
export var GetLandingZoneOperationOutput = struct(n0, _GLZOO, 0, [_oD], [() => LandingZoneOperationDetail]);
export var GetLandingZoneOutput = struct(n0, _GLZO, 0, [_lZ], [() => LandingZoneDetail]);
export var LandingZoneDetail = struct(
  n0,
  _LZD,
  0,
  [_v, _ma, _a, _s, _lAV, _dS],
  [0, 15, 0, 0, 0, () => LandingZoneDriftStatusSummary]
);
export var LandingZoneDriftStatusSummary = struct(n0, _LZDSS, 0, [_s], [0]);
export var LandingZoneOperationDetail = struct(n0, _LZOD, 0, [_oT, _oI, _s, _sT, _eT, _sM], [0, 0, 0, 5, 5, 0]);
export var LandingZoneOperationFilter = struct(n0, _LZOF, 0, [_ty, _st], [64 | 0, 64 | 0]);
export var LandingZoneOperationSummary = struct(n0, _LZOS, 0, [_oT, _oI, _s], [0, 0, 0]);
export var ListControlOperationsInput = struct(n0, _LCOI, 0, [_f, _nT, _mR], [() => ControlOperationFilter, 0, 1]);
export var ListControlOperationsOutput = struct(n0, _LCOO, 0, [_cOo, _nT], [() => ControlOperations, 0]);
export var ListEnabledBaselinesInput = struct(
  n0,
  _LEBI,
  0,
  [_f, _nT, _mR, _iC],
  [() => EnabledBaselineFilter, 0, 1, 2]
);
export var ListEnabledBaselinesOutput = struct(n0, _LEBO, 0, [_eB, _nT], [() => EnabledBaselines, 0]);
export var ListEnabledControlsInput = struct(n0, _LECI, 0, [_tI, _nT, _mR, _f], [0, 0, 1, () => EnabledControlFilter]);
export var ListEnabledControlsOutput = struct(n0, _LECO, 0, [_eC, _nT], [() => EnabledControls, 0]);
export var ListLandingZoneOperationsInput = struct(
  n0,
  _LLZOI,
  0,
  [_f, _nT, _mR],
  [() => LandingZoneOperationFilter, 0, 1]
);
export var ListLandingZoneOperationsOutput = struct(n0, _LLZOO, 0, [_lZO, _nT], [() => LandingZoneOperations, 0]);
export var Region = struct(n0, _R, 0, [_n], [0]);
export var Unit = "unit" as const;

export var ControlIdentifiers = 64 | 0;

export var ControlOperations = list(n0, _COo, 0, () => ControlOperationSummary);
export var ControlOperationStatuses = 64 | 0;

export var ControlOperationTypes = 64 | 0;

export var DriftStatuses = 64 | 0;

export var EnabledBaselineBaselineIdentifiers = 64 | 0;

export var EnabledBaselineDriftStatuses = 64 | 0;

export var EnabledBaselineEnablementStatuses = 64 | 0;

export var EnabledBaselineParameterSummaries = list(n0, _EBPSn, 0, () => EnabledBaselineParameterSummary);
export var EnabledBaselineParentIdentifiers = 64 | 0;

export var EnabledBaselines = list(n0, _EB, 0, () => EnabledBaselineSummary);
export var EnabledBaselineTargetIdentifiers = 64 | 0;

export var EnabledControlIdentifiers = 64 | 0;

export var EnabledControlParameterSummaries = list(n0, _ECPSn, 0, () => EnabledControlParameterSummary);
export var EnabledControls = list(n0, _EC, 0, () => EnabledControlSummary);
export var EnablementStatuses = 64 | 0;

export var LandingZoneOperations = list(n0, _LZO, 0, () => LandingZoneOperationSummary);
export var LandingZoneOperationStatuses = 64 | 0;

export var LandingZoneOperationTypes = 64 | 0;

export var TargetIdentifiers = 64 | 0;

export var TargetRegions = list(n0, _TR, 0, () => Region);
export var GetBaselineOperation = op(
  n0,
  _GBOe,
  {
    [_h]: ["POST", "/get-baseline-operation", 200],
  },
  () => GetBaselineOperationInput,
  () => GetBaselineOperationOutput
);
export var GetControlOperation = op(
  n0,
  _GCO,
  {
    [_h]: ["POST", "/get-control-operation", 200],
  },
  () => GetControlOperationInput,
  () => GetControlOperationOutput
);
export var GetEnabledBaseline = op(
  n0,
  _GEB,
  {
    [_h]: ["POST", "/get-enabled-baseline", 200],
  },
  () => GetEnabledBaselineInput,
  () => GetEnabledBaselineOutput
);
export var GetEnabledControl = op(
  n0,
  _GEC,
  {
    [_h]: ["POST", "/get-enabled-control", 200],
  },
  () => GetEnabledControlInput,
  () => GetEnabledControlOutput
);
export var GetLandingZone = op(
  n0,
  _GLZ,
  {
    [_h]: ["POST", "/get-landingzone", 200],
  },
  () => GetLandingZoneInput,
  () => GetLandingZoneOutput
);
export var GetLandingZoneOperation = op(
  n0,
  _GLZOe,
  {
    [_h]: ["POST", "/get-landingzone-operation", 200],
  },
  () => GetLandingZoneOperationInput,
  () => GetLandingZoneOperationOutput
);
export var ListControlOperations = op(
  n0,
  _LCO,
  {
    [_h]: ["POST", "/list-control-operations", 200],
  },
  () => ListControlOperationsInput,
  () => ListControlOperationsOutput
);
export var ListEnabledBaselines = op(
  n0,
  _LEB,
  {
    [_h]: ["POST", "/list-enabled-baselines", 200],
  },
  () => ListEnabledBaselinesInput,
  () => ListEnabledBaselinesOutput
);
export var ListEnabledControls = op(
  n0,
  _LEC,
  {
    [_h]: ["POST", "/list-enabled-controls", 200],
  },
  () => ListEnabledControlsInput,
  () => ListEnabledControlsOutput
);
export var ListLandingZoneOperations = op(
  n0,
  _LLZOi,
  {
    [_h]: ["POST", "/list-landingzone-operations", 200],
  },
  () => ListLandingZoneOperationsInput,
  () => ListLandingZoneOperationsOutput
);
