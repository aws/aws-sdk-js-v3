// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DTG, _DTGR, _DTGRe, _h, _i, _st, _tGI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTargetGroupRequest = struct(n0, _DTGR, 0, [_tGI], [[0, 1]]);
export var DeleteTargetGroupResponse = struct(n0, _DTGRe, 0, [_i, _a, _st], [0, 0, 0]);
export var DeleteTargetGroup = op(
  n0,
  _DTG,
  {
    [_h]: ["DELETE", "/targetgroups/{targetGroupIdentifier}", 200],
  },
  () => DeleteTargetGroupRequest,
  () => DeleteTargetGroupResponse
);
