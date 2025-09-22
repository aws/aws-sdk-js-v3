// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACLA,
  _CCont,
  _CT,
  _CTA,
  _CTB,
  _DAa,
  _DS,
  _FALMA,
  _FNRE,
  _FR,
  _HL,
  _ICnp,
  _LC,
  _LJA,
  _LJDA,
  _LJDS,
  _LJIC,
  _LJN,
  _LJO,
  _LJS,
  _LJSa,
  _LJSDS,
  _LJSDSa,
  _LJSL,
  _LLJ,
  _LLJR,
  _LLJRi,
  _LMI,
  _LMi,
  _LMO,
  _LMT,
  _LMTA,
  _LMTB,
  _MA,
  _MLa,
  _MNo,
  _Mo,
  _MR,
  _MSL,
  _MSode,
  _MSU,
  _NCa,
  _NT,
  _ODSU,
  _PHTLA,
  _SBo,
  _SDS,
  _SDSn,
  _SE,
  _SO,
  _STA,
  _TL,
  _Un,
  _WAo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LabelCounters = struct(n0, _LC, 0, [_TL, _HL, _MLa, _FNRE, _Un], [1, 1, 1, 1, 1]);
export var LabelingJobDataAttributes = struct(n0, _LJDA, 0, [_CCont], [64 | 0]);
export var LabelingJobDataSource = struct(
  n0,
  _LJDS,
  0,
  [_SDS, _SDSn],
  [() => LabelingJobS3DataSource, () => LabelingJobSnsDataSource]
);
export var LabelingJobInputConfig = struct(
  n0,
  _LJIC,
  0,
  [_DS, _DAa],
  [() => LabelingJobDataSource, () => LabelingJobDataAttributes]
);
export var LabelingJobOutput = struct(n0, _LJO, 0, [_ODSU, _FALMA], [0, 0]);
export var LabelingJobS3DataSource = struct(n0, _LJSDS, 0, [_MSU], [0]);
export var LabelingJobSnsDataSource = struct(n0, _LJSDSa, 0, [_STA], [0]);
export var LabelingJobSummary = struct(
  n0,
  _LJSa,
  0,
  [_LJN, _LJA, _CT, _LMT, _LJS, _LC, _WAo, _PHTLA, _ACLA, _FR, _LJO, _ICnp],
  [0, 0, 4, 4, 0, () => LabelCounters, 0, 0, 0, 0, () => LabelingJobOutput, () => LabelingJobInputConfig]
);
export var ListLabelingJobsRequest = struct(
  n0,
  _LLJR,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _MR, _NT, _NCa, _SBo, _SO, _SE],
  [4, 4, 4, 4, 1, 0, 0, 0, 0, 0]
);
export var ListLabelingJobsResponse = struct(n0, _LLJRi, 0, [_LJSL, _NT], [() => LabelingJobSummaryList, 0]);
export var ListModelsInput = struct(n0, _LMI, 0, [_SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA], [0, 0, 0, 1, 0, 4, 4]);
export var ListModelsOutput = struct(n0, _LMO, 0, [_Mo, _NT], [() => ModelSummaryList, 0]);
export var ModelSummary = struct(n0, _MSode, 0, [_MNo, _MA, _CT], [0, 0, 4]);
export var ContentClassifiers = 64 | 0;

export var LabelingJobSummaryList = list(n0, _LJSL, 0, () => LabelingJobSummary);
export var ModelSummaryList = list(n0, _MSL, 0, () => ModelSummary);
export var ListLabelingJobs = op(
  n0,
  _LLJ,
  0,
  () => ListLabelingJobsRequest,
  () => ListLabelingJobsResponse
);
export var ListModels = op(
  n0,
  _LMi,
  0,
  () => ListModelsInput,
  () => ListModelsOutput
);
