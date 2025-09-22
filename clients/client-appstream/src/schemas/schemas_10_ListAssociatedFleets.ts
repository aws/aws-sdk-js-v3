// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LAF, _LAFR, _LAFRi, _Na, _NT, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAssociatedFleetsRequest = struct(n0, _LAFR, 0, [_SN, _NT], [0, 0]);
export var ListAssociatedFleetsResult = struct(n0, _LAFRi, 0, [_Na, _NT], [64 | 0, 0]);
export var ListAssociatedFleets = op(
  n0,
  _LAF,
  0,
  () => ListAssociatedFleetsRequest,
  () => ListAssociatedFleetsResult
);
