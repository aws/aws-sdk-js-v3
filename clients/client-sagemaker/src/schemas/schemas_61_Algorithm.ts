// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAl,
  _ADl,
  _ANlg,
  _ASL,
  _ASlg,
  _ASlgo,
  _CT,
  _CTA,
  _CTB,
  _LAI,
  _LAis,
  _LAO,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AlgorithmSummary = struct(n0, _ASlg, 0, [_ANlg, _AAl, _ADl, _CT, _ASlgo], [0, 0, 0, 4, 0]);
export var ListAlgorithmsInput = struct(n0, _LAI, 0, [_CTA, _CTB, _MR, _NCa, _NT, _SBo, _SO], [4, 4, 1, 0, 0, 0, 0]);
export var ListAlgorithmsOutput = struct(n0, _LAO, 0, [_ASL, _NT], [() => AlgorithmSummaryList, 0]);
export var AlgorithmSummaryList = list(n0, _ASL, 0, () => AlgorithmSummary);
export var ListAlgorithms = op(
  n0,
  _LAis,
  0,
  () => ListAlgorithmsInput,
  () => ListAlgorithmsOutput
);
