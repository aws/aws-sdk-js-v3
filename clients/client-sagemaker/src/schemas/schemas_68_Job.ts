// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _EMx,
  _EN,
  _FR,
  _LME,
  _LMER,
  _LMERi,
  _LMT,
  _LMTA,
  _LMTB,
  _LPJ,
  _LPJR,
  _LPJRi,
  _MES,
  _MESL,
  _MESo,
  _MESon,
  _MJDN,
  _MR,
  _MSN,
  _MTE,
  _MTo,
  _NCa,
  _NT,
  _PET,
  _PJA,
  _PJN,
  _PJS,
  _PJSr,
  _PJSro,
  _SBo,
  _SE,
  _SO,
  _STAc,
  _STB,
  _STch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMonitoringExecutionsRequest = struct(
  n0,
  _LMER,
  0,
  [_MSN, _EN, _SBo, _SO, _NT, _MR, _STB, _STAc, _CTB, _CTA, _LMTB, _LMTA, _SE, _MJDN, _MTE],
  [0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0]
);
export var ListMonitoringExecutionsResponse = struct(
  n0,
  _LMERi,
  0,
  [_MES, _NT],
  [() => MonitoringExecutionSummaryList, 0]
);
export var ListProcessingJobsRequest = struct(
  n0,
  _LPJR,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SBo, _SO, _NT, _MR],
  [4, 4, 4, 4, 0, 0, 0, 0, 0, 1]
);
export var ListProcessingJobsResponse = struct(n0, _LPJRi, 0, [_PJSr, _NT], [() => ProcessingJobSummaries, 0]);
export var MonitoringExecutionSummary = struct(
  n0,
  _MESo,
  0,
  [_MSN, _STch, _CT, _LMT, _MESon, _PJA, _EN, _FR, _MJDN, _MTo],
  [0, 4, 4, 4, 0, 0, 0, 0, 0, 0]
);
export var ProcessingJobSummary = struct(
  n0,
  _PJSro,
  0,
  [_PJN, _PJA, _CT, _PET, _LMT, _PJS, _FR, _EMx],
  [0, 0, 4, 4, 4, 0, 0, 0]
);
export var MonitoringExecutionSummaryList = list(n0, _MESL, 0, () => MonitoringExecutionSummary);
export var ProcessingJobSummaries = list(n0, _PJSr, 0, () => ProcessingJobSummary);
export var ListMonitoringExecutions = op(
  n0,
  _LME,
  0,
  () => ListMonitoringExecutionsRequest,
  () => ListMonitoringExecutionsResponse
);
export var ListProcessingJobs = op(
  n0,
  _LPJ,
  0,
  () => ListProcessingJobsRequest,
  () => ListProcessingJobsResponse
);
