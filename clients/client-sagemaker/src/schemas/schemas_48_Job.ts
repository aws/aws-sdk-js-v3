// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _DPis,
  _ERD,
  _FHPTJOM,
  _FR,
  _HPTJN,
  _HPTJSy,
  _HPTJSyper,
  _IT,
  _KAPIS,
  _LMT,
  _LMTA,
  _LMTB,
  _LP,
  _LTJ,
  _LTJFHPTJ,
  _LTJFHPTJR,
  _LTJFHPTJRi,
  _LTJR,
  _LTJRi,
  _MN,
  _MR,
  _NCa,
  _NT,
  _OS,
  _PCFU,
  _PCr,
  _PIIM,
  _PPr,
  _PRC,
  _PRCr,
  _RBJ,
  _RCe,
  _RCFU,
  _RCN,
  _RDC,
  _RDCFU,
  _REI,
  _RP,
  _RRBTIS,
  _SBo,
  _SE,
  _SO,
  _SOP,
  _SSe,
  _St,
  _TET,
  _THP,
  _TJA,
  _TJDN,
  _TJN,
  _TJNu,
  _TJS,
  _TJSra,
  _TJSrai,
  _TPA,
  _TPAE,
  _TST,
  _Ty,
  _UTJ,
  _UTJR,
  _UTJRp,
  _Va,
  _VSIGB,
  _WPS,
  _WPSE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FinalHyperParameterTuningJobObjectiveMetric = struct(n0, _FHPTJOM, 0, [_Ty, _MN, _Va], [0, 0, 1]);
export var HyperParameterTrainingJobSummary = struct(
  n0,
  _HPTJSy,
  0,
  [_TJDN, _TJN, _TJA, _TJNu, _CT, _TST, _TET, _TJS, _THP, _FR, _FHPTJOM, _OS],
  [0, 0, 0, 0, 4, 4, 4, 0, 128 | 0, 0, () => FinalHyperParameterTuningJobObjectiveMetric, 0]
);
export var ListTrainingJobsForHyperParameterTuningJobRequest = struct(
  n0,
  _LTJFHPTJR,
  0,
  [_HPTJN, _NT, _MR, _SE, _SBo, _SO],
  [0, 0, 1, 0, 0, 0]
);
export var ListTrainingJobsForHyperParameterTuningJobResponse = struct(
  n0,
  _LTJFHPTJRi,
  0,
  [_TJSra, _NT],
  [() => HyperParameterTrainingJobSummaries, 0]
);
export var ListTrainingJobsRequest = struct(
  n0,
  _LTJR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SBo, _SO, _WPSE, _TPAE],
  [0, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0]
);
export var ListTrainingJobsResponse = struct(n0, _LTJRi, 0, [_TJSra, _NT], [() => TrainingJobSummaries, 0]);
export var ProfilerConfigForUpdate = struct(n0, _PCFU, 0, [_SOP, _PIIM, _PPr, _DPis], [0, 1, 128 | 0, 2]);
export var ProfilerRuleConfiguration = struct(
  n0,
  _PRCr,
  0,
  [_RCN, _LP, _SOP, _REI, _IT, _VSIGB, _RP],
  [0, 0, 0, 0, 0, 1, 128 | 0]
);
export var RemoteDebugConfigForUpdate = struct(n0, _RDCFU, 0, [_ERD], [2]);
export var ResourceConfigForUpdate = struct(n0, _RCFU, 0, [_KAPIS], [1]);
export var TrainingJobSummary = struct(
  n0,
  _TJSrai,
  0,
  [_TJN, _TJA, _CT, _TET, _LMT, _TJS, _SSe, _WPS, _TPA],
  [0, 0, 4, 4, 4, 0, 0, () => WarmPoolStatus, 0]
);
export var UpdateTrainingJobRequest = struct(
  n0,
  _UTJR,
  0,
  [_TJN, _PCr, _PRC, _RCe, _RDC],
  [
    0,
    () => ProfilerConfigForUpdate,
    () => ProfilerRuleConfigurations,
    () => ResourceConfigForUpdate,
    () => RemoteDebugConfigForUpdate,
  ]
);
export var UpdateTrainingJobResponse = struct(n0, _UTJRp, 0, [_TJA], [0]);
export var WarmPoolStatus = struct(n0, _WPS, 0, [_St, _RRBTIS, _RBJ], [0, 1, 0]);
export var HyperParameterTrainingJobSummaries = list(n0, _HPTJSyper, 0, () => HyperParameterTrainingJobSummary);
export var ProfilerRuleConfigurations = list(n0, _PRC, 0, () => ProfilerRuleConfiguration);
export var TrainingJobSummaries = list(n0, _TJSra, 0, () => TrainingJobSummary);
export var ProfilingParameters = 128 | 0;

export var RuleParameters = 128 | 0;

export var ListTrainingJobs = op(
  n0,
  _LTJ,
  0,
  () => ListTrainingJobsRequest,
  () => ListTrainingJobsResponse
);
export var ListTrainingJobsForHyperParameterTuningJob = op(
  n0,
  _LTJFHPTJ,
  0,
  () => ListTrainingJobsForHyperParameterTuningJobRequest,
  () => ListTrainingJobsForHyperParameterTuningJobResponse
);
export var UpdateTrainingJob = op(
  n0,
  _UTJ,
  0,
  () => UpdateTrainingJobRequest,
  () => UpdateTrainingJobResponse
);
