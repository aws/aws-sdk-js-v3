// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _PA, _T, _TP, _TPR, n0, tagListType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagPolicyRequest = struct(n0, _TPR, 0, [_PA, _T], [0, () => tagListType]);
export var TagPolicy = op(
  n0,
  _TP,
  0,
  () => TagPolicyRequest,
  () => Unit
);
