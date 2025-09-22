// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AN, _AS, _AVI, _AVS, _AVSp, _L, _LAV, _LAVR, _LAVRi, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationVersionSummary = struct(n0, _AVS, 0, [_AVI, _AS], [1, 0]);
export var ListApplicationVersionsRequest = struct(n0, _LAVR, 0, [_AN, _L, _NT], [0, 1, 0]);
export var ListApplicationVersionsResponse = struct(
  n0,
  _LAVRi,
  0,
  [_AVSp, _NT],
  [() => ApplicationVersionSummaries, 0]
);
export var ApplicationVersionSummaries = list(n0, _AVSp, 0, () => ApplicationVersionSummary);
export var ListApplicationVersions = op(
  n0,
  _LAV,
  0,
  () => ListApplicationVersionsRequest,
  () => ListApplicationVersionsResponse
);
