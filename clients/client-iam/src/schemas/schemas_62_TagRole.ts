// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RN, _T, _TR, _TRR, n0, tagListType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagRoleRequest = struct(n0, _TRR, 0, [_RN, _T], [0, () => tagListType]);
export var TagRole = op(
  n0,
  _TR,
  0,
  () => TagRoleRequest,
  () => Unit
);
