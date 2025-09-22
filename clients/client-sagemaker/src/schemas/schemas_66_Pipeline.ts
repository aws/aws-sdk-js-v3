// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _CBr,
  _LPE,
  _LPER,
  _LPERi,
  _MR,
  _NT,
  _PEA,
  _PED,
  _PEDN,
  _PEFR,
  _PES,
  _PESi,
  _PESipel,
  _PESLi,
  _PNi,
  _SBo,
  _SO,
  _STt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPipelineExecutionsRequest = struct(
  n0,
  _LPER,
  0,
  [_PNi, _CAre, _CBr, _SBo, _SO, _NT, _MR],
  [0, 4, 4, 0, 0, 0, 1]
);
export var ListPipelineExecutionsResponse = struct(
  n0,
  _LPERi,
  0,
  [_PESi, _NT],
  [() => PipelineExecutionSummaryList, 0]
);
export var PipelineExecutionSummary = struct(
  n0,
  _PESipel,
  0,
  [_PEA, _STt, _PES, _PED, _PEDN, _PEFR],
  [0, 4, 0, 0, 0, 0]
);
export var PipelineExecutionSummaryList = list(n0, _PESLi, 0, () => PipelineExecutionSummary);
export var ListPipelineExecutions = op(
  n0,
  _LPE,
  0,
  () => ListPipelineExecutionsRequest,
  () => ListPipelineExecutionsResponse
);
