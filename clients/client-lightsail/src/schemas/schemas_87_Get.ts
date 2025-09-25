// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _co, _GISet, _GISRetns, _GISRetnst, _ht, _iN, _ISn, _n, _sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInstanceStateRequest = struct(n0, _GISRetns, 0, [_iN], [0]);
export var GetInstanceStateResult = struct(n0, _GISRetnst, 0, [_sta], [() => InstanceState]);
export var InstanceState = struct(n0, _ISn, 0, [_co, _n], [1, 0]);
export var GetInstanceState = op(
  n0,
  _GISet,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstanceState", 200],
  },
  () => GetInstanceStateRequest,
  () => GetInstanceStateResult
);
