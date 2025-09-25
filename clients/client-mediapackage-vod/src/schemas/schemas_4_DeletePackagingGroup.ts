// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPG, _DPGR, _DPGRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePackagingGroupRequest = struct(n0, _DPGR, 0, [_I], [[0, 1]]);
export var DeletePackagingGroupResponse = struct(n0, _DPGRe, 0, [], []);
export var DeletePackagingGroup = op(
  n0,
  _DPG,
  {
    [_h]: ["DELETE", "/packaging_groups/{Id}", 202],
  },
  () => DeletePackagingGroupRequest,
  () => DeletePackagingGroupResponse
);
