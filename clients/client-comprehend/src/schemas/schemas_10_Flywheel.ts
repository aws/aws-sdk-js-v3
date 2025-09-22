// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AFS,
  _AMA,
  _AP,
  _AR,
  _CRT,
  _CT,
  _CTA,
  _CTB,
  _DFI,
  _DFIR,
  _DFIRe,
  _DLSU,
  _EMA,
  _EMM,
  _EMSP,
  _ET,
  _F,
  _FA,
  _FF,
  _FIF,
  _FII,
  _FIP,
  _FIPL,
  _FMEM,
  _FSL,
  _FSl,
  _LF,
  _LFI,
  _LFIH,
  _LFIHR,
  _LFIHRi,
  _LFR,
  _LFRi,
  _LMT,
  _M,
  _MRa,
  _MT,
  _NT,
  _SFI,
  _SFIR,
  _SFIRt,
  _St,
  _TMA,
  _TMM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFlywheelIterationRequest = struct(n0, _DFIR, 0, [_FA, _FII], [0, 0]);
export var DescribeFlywheelIterationResponse = struct(n0, _DFIRe, 0, [_FIP], [() => FlywheelIterationProperties]);
export var FlywheelFilter = struct(n0, _FF, 0, [_St, _CTA, _CTB], [0, 4, 4]);
export var FlywheelIterationFilter = struct(n0, _FIF, 0, [_CTA, _CTB], [4, 4]);
export var FlywheelIterationProperties = struct(
  n0,
  _FIP,
  0,
  [_FA, _FII, _CT, _ET, _St, _M, _EMA, _EMM, _TMA, _TMM, _EMSP],
  [0, 0, 4, 4, 0, 0, 0, () => FlywheelModelEvaluationMetrics, 0, () => FlywheelModelEvaluationMetrics, 0]
);
export var FlywheelModelEvaluationMetrics = struct(n0, _FMEM, 0, [_AFS, _AP, _AR, _AA], [1, 1, 1, 1]);
export var FlywheelSummary = struct(
  n0,
  _FSl,
  0,
  [_FA, _AMA, _DLSU, _St, _MT, _M, _CT, _LMT, _LFI],
  [0, 0, 0, 0, 0, 0, 4, 4, 0]
);
export var ListFlywheelIterationHistoryRequest = struct(
  n0,
  _LFIHR,
  0,
  [_FA, _F, _NT, _MRa],
  [0, () => FlywheelIterationFilter, 0, 1]
);
export var ListFlywheelIterationHistoryResponse = struct(
  n0,
  _LFIHRi,
  0,
  [_FIPL, _NT],
  [() => FlywheelIterationPropertiesList, 0]
);
export var ListFlywheelsRequest = struct(n0, _LFR, 0, [_F, _NT, _MRa], [() => FlywheelFilter, 0, 1]);
export var ListFlywheelsResponse = struct(n0, _LFRi, 0, [_FSL, _NT], [() => FlywheelSummaryList, 0]);
export var StartFlywheelIterationRequest = struct(n0, _SFIR, 0, [_FA, _CRT], [0, 0]);
export var StartFlywheelIterationResponse = struct(n0, _SFIRt, 0, [_FA, _FII], [0, 0]);
export var FlywheelIterationPropertiesList = list(n0, _FIPL, 0, () => FlywheelIterationProperties);
export var FlywheelSummaryList = list(n0, _FSL, 0, () => FlywheelSummary);
export var DescribeFlywheelIteration = op(
  n0,
  _DFI,
  0,
  () => DescribeFlywheelIterationRequest,
  () => DescribeFlywheelIterationResponse
);
export var ListFlywheelIterationHistory = op(
  n0,
  _LFIH,
  0,
  () => ListFlywheelIterationHistoryRequest,
  () => ListFlywheelIterationHistoryResponse
);
export var ListFlywheels = op(
  n0,
  _LF,
  0,
  () => ListFlywheelsRequest,
  () => ListFlywheelsResponse
);
export var StartFlywheelIteration = op(
  n0,
  _SFI,
  0,
  () => StartFlywheelIterationRequest,
  () => StartFlywheelIterationResponse
);
