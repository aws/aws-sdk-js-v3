// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FN, _LAS, _LASR, _LASRi, _Na, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAssociatedStacksRequest = struct(n0, _LASR, 0, [_FN, _NT], [0, 0]);
export var ListAssociatedStacksResult = struct(n0, _LASRi, 0, [_Na, _NT], [64 | 0, 0]);
export var ListAssociatedStacks = op(
  n0,
  _LAS,
  0,
  () => ListAssociatedStacksRequest,
  () => ListAssociatedStacksResult
);
