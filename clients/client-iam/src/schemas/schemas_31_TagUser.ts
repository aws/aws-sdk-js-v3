// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _T, _TU, _TUR, _UN, n0, tagListType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagUserRequest = struct(n0, _TUR, 0, [_UN, _T], [0, () => tagListType]);
export var TagUser = op(
  n0,
  _TU,
  0,
  () => TagUserRequest,
  () => Unit
);
