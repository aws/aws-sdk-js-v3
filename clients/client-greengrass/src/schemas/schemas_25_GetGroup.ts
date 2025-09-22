// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _GG, _GGR, _GGRe, _GI, _h, _I, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGroupRequest = struct(n0, _GGR, 0, [_GI], [[0, 1]]);
export var GetGroupResponse = struct(
  n0,
  _GGRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetGroup = op(
  n0,
  _GG,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}", 200],
  },
  () => GetGroupRequest,
  () => GetGroupResponse
);
