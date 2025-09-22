// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Com,
  _CT,
  _CTA,
  _CTB,
  _DHPTJ,
  _DHPTJR,
  _F,
  _HPTET,
  _HPTJA,
  _HPTJN,
  _HPTJS,
  _HPTJSyp,
  _HPTJSype,
  _IP,
  _LHPTJ,
  _LHPTJR,
  _LHPTJRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MNOTJ,
  _MPTJ,
  _MR,
  _MRIS,
  _NCa,
  _NRE,
  _NT,
  _OSCb,
  _Pen,
  _REe,
  _RL,
  _SBo,
  _SE,
  _SHPTJ,
  _SHPTJR,
  _SO,
  _Sto,
  _Str,
  _Succ,
  _TJSC,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHyperParameterTuningJobRequest = struct(n0, _DHPTJR, 0, [_HPTJN], [0]);
export var HyperParameterTuningJobSummary = struct(
  n0,
  _HPTJSyp,
  0,
  [_HPTJN, _HPTJA, _HPTJS, _Str, _CT, _HPTET, _LMT, _TJSC, _OSCb, _RL],
  [0, 0, 0, 0, 4, 4, 4, () => TrainingJobStatusCounters, () => ObjectiveStatusCounters, () => ResourceLimits]
);
export var ListHyperParameterTuningJobsRequest = struct(
  n0,
  _LHPTJR,
  0,
  [_NT, _MR, _SBo, _SO, _NCa, _CTA, _CTB, _LMTA, _LMTB, _SE],
  [0, 1, 0, 0, 0, 4, 4, 4, 4, 0]
);
export var ListHyperParameterTuningJobsResponse = struct(
  n0,
  _LHPTJRi,
  0,
  [_HPTJSype, _NT],
  [() => HyperParameterTuningJobSummaries, 0]
);
export var ObjectiveStatusCounters = struct(n0, _OSCb, 0, [_Succ, _Pen, _F], [1, 1, 1]);
export var ResourceLimits = struct(n0, _RL, 0, [_MNOTJ, _MPTJ, _MRIS], [1, 1, 1]);
export var StopHyperParameterTuningJobRequest = struct(n0, _SHPTJR, 0, [_HPTJN], [0]);
export var TrainingJobStatusCounters = struct(n0, _TJSC, 0, [_Com, _IP, _REe, _NRE, _Sto], [1, 1, 1, 1, 1]);
export var HyperParameterTuningJobSummaries = list(n0, _HPTJSype, 0, () => HyperParameterTuningJobSummary);
export var DeleteHyperParameterTuningJob = op(
  n0,
  _DHPTJ,
  0,
  () => DeleteHyperParameterTuningJobRequest,
  () => Unit
);
export var ListHyperParameterTuningJobs = op(
  n0,
  _LHPTJ,
  0,
  () => ListHyperParameterTuningJobsRequest,
  () => ListHyperParameterTuningJobsResponse
);
export var StopHyperParameterTuningJob = op(
  n0,
  _SHPTJ,
  0,
  () => StopHyperParameterTuningJobRequest,
  () => Unit
);
