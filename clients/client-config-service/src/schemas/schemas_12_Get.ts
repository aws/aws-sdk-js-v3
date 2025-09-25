// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ECI,
  _EMv,
  _EST,
  _ETn,
  _F,
  _L,
  _LRE,
  _LRER,
  _LRERi,
  _NT,
  _REe,
  _REes,
  _REF,
  _REI,
  _STt,
  _TW,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourceEvaluationsRequest = struct(
  n0,
  _LRER,
  0,
  [_F, _L, _NT],
  [() => ResourceEvaluationFilters, 1, 0]
);
export var ListResourceEvaluationsResponse = struct(n0, _LRERi, 0, [_REe, _NT], [() => ResourceEvaluations, 0]);
export var ResourceEvaluation = struct(n0, _REes, 0, [_REI, _EMv, _EST], [0, 0, 4]);
export var ResourceEvaluationFilters = struct(n0, _REF, 0, [_EMv, _TW, _ECI], [0, () => TimeWindow, 0]);
export var TimeWindow = struct(n0, _TW, 0, [_STt, _ETn], [4, 4]);
export var ResourceEvaluations = list(n0, _REe, 0, () => ResourceEvaluation);
export var ListResourceEvaluations = op(
  n0,
  _LRE,
  0,
  () => ListResourceEvaluationsRequest,
  () => ListResourceEvaluationsResponse
);
