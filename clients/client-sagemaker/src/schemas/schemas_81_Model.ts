// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAr,
  _CTA,
  _CTB,
  _DMCEJ,
  _DMCEJR,
  _DMCEJRe,
  _EAxp,
  _FR,
  _LMA,
  _LMCEJ,
  _LMCEJR,
  _LMCEJRi,
  _MCEA,
  _MCEJA,
  _MCEJN,
  _MCEJNC,
  _MCEJS,
  _MCEJSL,
  _MCEJSo,
  _MCEOC,
  _MCN,
  _MCV,
  _MR,
  _NT,
  _OC,
  _SBo,
  _SE,
  _SEA,
  _SO,
  _SOP,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeModelCardExportJobRequest = struct(n0, _DMCEJR, 0, [_MCEJA], [0]);
export var DescribeModelCardExportJobResponse = struct(
  n0,
  _DMCEJRe,
  0,
  [_MCEJN, _MCEJA, _St, _MCN, _MCV, _OC, _CAr, _LMA, _FR, _EAxp],
  [0, 0, 0, 0, 1, () => ModelCardExportOutputConfig, 4, 4, 0, () => ModelCardExportArtifacts]
);
export var ListModelCardExportJobsRequest = struct(
  n0,
  _LMCEJR,
  0,
  [_MCN, _MCV, _CTA, _CTB, _MCEJNC, _SE, _SBo, _SO, _NT, _MR],
  [0, 1, 4, 4, 0, 0, 0, 0, 0, 1]
);
export var ListModelCardExportJobsResponse = struct(
  n0,
  _LMCEJRi,
  0,
  [_MCEJS, _NT],
  [() => ModelCardExportJobSummaryList, 0]
);
export var ModelCardExportArtifacts = struct(n0, _MCEA, 0, [_SEA], [0]);
export var ModelCardExportJobSummary = struct(
  n0,
  _MCEJSo,
  0,
  [_MCEJN, _MCEJA, _St, _MCN, _MCV, _CAr, _LMA],
  [0, 0, 0, 0, 1, 4, 4]
);
export var ModelCardExportOutputConfig = struct(n0, _MCEOC, 0, [_SOP], [0]);
export var ModelCardExportJobSummaryList = list(n0, _MCEJSL, 0, () => ModelCardExportJobSummary);
export var DescribeModelCardExportJob = op(
  n0,
  _DMCEJ,
  0,
  () => DescribeModelCardExportJobRequest,
  () => DescribeModelCardExportJobResponse
);
export var ListModelCardExportJobs = op(
  n0,
  _LMCEJ,
  0,
  () => ListModelCardExportJobsRequest,
  () => ListModelCardExportJobsResponse
);
