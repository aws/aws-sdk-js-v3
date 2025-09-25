// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cT,
  _cTN,
  _d,
  _dC,
  _DS,
  _DSR,
  _DSRe,
  _eIK,
  _eOv,
  _eP,
  _eT,
  _eTn,
  _ex,
  _exe,
  _f,
  _fV,
  _g,
  _GL,
  _GLR,
  _GLRe,
  _GS,
  _GSR,
  _GSRe,
  _gW,
  _h,
  _hQ,
  _L,
  _l,
  _la,
  _LE,
  _LG,
  _LGC,
  _LGCL,
  _LGL,
  _LL,
  _LLi,
  _LLR,
  _LLRi,
  _LSRis,
  _LSRR,
  _LSRRi,
  _lUO,
  _lUT,
  _mD,
  _MDC,
  _mG,
  _MGC,
  _MGCL,
  _MM,
  _mM,
  _MMC,
  _MMCL,
  _MML,
  _mR,
  _n,
  _nT,
  _OAC,
  _oAC,
  _p,
  _rB,
  _RR,
  _RRL,
  _rS,
  _rSem,
  _s,
  _SO,
  _sO,
  _SOL,
  _sR,
  _sRt,
  _SS,
  _SSC,
  _sSC,
  _SSCL,
  _sSD,
  _SSL,
  _SSLC,
  _SSLD,
  _sT,
  _st,
  _ste,
  _sTt,
  _t,
  _ta,
  _TC,
  _TCL,
  _tW,
  _ty,
  _UE,
  _UER,
  _UERp,
  _UL,
  _uL,
  _ULR,
  _ULRp,
  _va,
  _vK,
  _w,
  JsonValue,
  n0,
} from "./schemas_0";
import { Experiment, MetricDefinition } from "./schemas_1_Experiment";
import { Segment } from "./schemas_11_Experiment";

/* eslint no-var: 0 */

export var DeleteSegmentRequest = struct(n0, _DSR, 0, [_s], [[0, 1]]);
export var DeleteSegmentResponse = struct(n0, _DSRe, 0, [], []);
export var GetLaunchRequest = struct(
  n0,
  _GLR,
  0,
  [_p, _l],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetLaunchResponse = struct(n0, _GLRe, 0, [_l], [[() => Launch, 0]]);
export var GetSegmentRequest = struct(n0, _GSR, 0, [_s], [[0, 1]]);
export var GetSegmentResponse = struct(n0, _GSRe, 0, [_s], [[() => Segment, 0]]);
export var Launch = struct(
  n0,
  _L,
  0,
  [_ar, _n, _p, _st, _sRt, _d, _cT, _lUT, _exe, _g, _mM, _rS, _ty, _sSD, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => LaunchExecution,
    () => LaunchGroupList,
    [() => MetricMonitorList, 0],
    0,
    0,
    () => ScheduledSplitsLaunchDefinition,
    128 | 0,
  ]
);
export var LaunchExecution = struct(n0, _LE, 0, [_sT, _eT], [4, 4]);
export var LaunchGroup = struct(n0, _LG, 0, [_n, _d, _fV], [0, 0, 128 | 0]);
export var LaunchGroupConfig = struct(n0, _LGC, 0, [_n, _d, _f, _va], [0, 0, 0, 0]);
export var ListLaunchesRequest = struct(
  n0,
  _LLR,
  0,
  [_p, _mR, _nT, _st],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListLaunchesResponse = struct(n0, _LLRi, 0, [_la, _nT], [[() => LaunchesList, 0], 0]);
export var ListSegmentReferencesRequest = struct(
  n0,
  _LSRR,
  0,
  [_s, _mR, _nT, _ty],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListSegmentReferencesResponse = struct(n0, _LSRRi, 0, [_rB, _nT], [() => RefResourceList, 0]);
export var MetricDefinitionConfig = struct(n0, _MDC, 0, [_n, _eIK, _vK, _eP, _uL], [0, 0, 0, [() => JsonValue, 0], 0]);
export var MetricGoalConfig = struct(n0, _MGC, 0, [_mD, _dC], [[() => MetricDefinitionConfig, 0], 0]);
export var MetricMonitor = struct(n0, _MM, 0, [_mD], [[() => MetricDefinition, 0]]);
export var MetricMonitorConfig = struct(n0, _MMC, 0, [_mD], [[() => MetricDefinitionConfig, 0]]);
export var OnlineAbConfig = struct(n0, _OAC, 0, [_cTN, _tW], [0, 128 | 1]);
export var RefResource = struct(n0, _RR, 0, [_n, _ty, _ar, _st, _sTt, _eTn, _lUO], [0, 0, 0, 0, 0, 0, 0]);
export var ScheduledSplit = struct(n0, _SS, 0, [_sTt, _gW, _sO], [4, 128 | 1, () => SegmentOverridesList]);
export var ScheduledSplitConfig = struct(n0, _SSC, 0, [_sTt, _gW, _sO], [4, 128 | 1, () => SegmentOverridesList]);
export var ScheduledSplitsLaunchConfig = struct(n0, _SSLC, 0, [_ste], [() => ScheduledSplitConfigList]);
export var ScheduledSplitsLaunchDefinition = struct(n0, _SSLD, 0, [_ste], [() => ScheduledStepList]);
export var SegmentOverride = struct(n0, _SO, 0, [_s, _eOv, _w], [0, 1, 128 | 1]);
export var TreatmentConfig = struct(n0, _TC, 0, [_n, _d, _f, _va], [0, 0, 0, 0]);
export var UpdateExperimentRequest = struct(
  n0,
  _UER,
  0,
  [_p, _ex, _d, _t, _mG, _rS, _sR, _s, _rSem, _oAC],
  [[0, 1], [0, 1], 0, () => TreatmentConfigList, [() => MetricGoalConfigList, 0], 0, 1, 0, 2, () => OnlineAbConfig]
);
export var UpdateExperimentResponse = struct(n0, _UERp, 0, [_ex], [[() => Experiment, 0]]);
export var UpdateLaunchRequest = struct(
  n0,
  _ULR,
  0,
  [_p, _l, _d, _g, _mM, _rS, _sSC],
  [
    [0, 1],
    [0, 1],
    0,
    () => LaunchGroupConfigList,
    [() => MetricMonitorConfigList, 0],
    0,
    () => ScheduledSplitsLaunchConfig,
  ]
);
export var UpdateLaunchResponse = struct(n0, _ULRp, 0, [_l], [[() => Launch, 0]]);
export var LaunchesList = list(n0, _LL, 0, [() => Launch, 0]);
export var LaunchGroupConfigList = list(n0, _LGCL, 0, () => LaunchGroupConfig);
export var LaunchGroupList = list(n0, _LGL, 0, () => LaunchGroup);
export var MetricGoalConfigList = list(n0, _MGCL, 0, [() => MetricGoalConfig, 0]);
export var MetricMonitorConfigList = list(n0, _MMCL, 0, [() => MetricMonitorConfig, 0]);
export var MetricMonitorList = list(n0, _MML, 0, [() => MetricMonitor, 0]);
export var RefResourceList = list(n0, _RRL, 0, () => RefResource);
export var ScheduledSplitConfigList = list(n0, _SSCL, 0, () => ScheduledSplitConfig);
export var ScheduledStepList = list(n0, _SSL, 0, () => ScheduledSplit);
export var SegmentOverridesList = list(n0, _SOL, 0, () => SegmentOverride);
export var TreatmentConfigList = list(n0, _TCL, 0, () => TreatmentConfig);
export var GroupToWeightMap = 128 | 1;

export var DeleteSegment = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/segments/{segment}", 200],
  },
  () => DeleteSegmentRequest,
  () => DeleteSegmentResponse
);
export var GetLaunch = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/projects/{project}/launches/{launch}", 200],
  },
  () => GetLaunchRequest,
  () => GetLaunchResponse
);
export var GetSegment = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/segments/{segment}", 200],
  },
  () => GetSegmentRequest,
  () => GetSegmentResponse
);
export var ListLaunches = op(
  n0,
  _LLi,
  {
    [_h]: ["GET", "/projects/{project}/launches", 200],
  },
  () => ListLaunchesRequest,
  () => ListLaunchesResponse
);
export var ListSegmentReferences = op(
  n0,
  _LSRis,
  {
    [_h]: ["GET", "/segments/{segment}/references", 200],
  },
  () => ListSegmentReferencesRequest,
  () => ListSegmentReferencesResponse
);
export var UpdateExperiment = op(
  n0,
  _UE,
  {
    [_h]: ["PATCH", "/projects/{project}/experiments/{experiment}", 200],
  },
  () => UpdateExperimentRequest,
  () => UpdateExperimentResponse
);
export var UpdateLaunch = op(
  n0,
  _UL,
  {
    [_h]: ["PATCH", "/projects/{project}/launches/{launch}", 200],
  },
  () => UpdateLaunchRequest,
  () => UpdateLaunchResponse
);
