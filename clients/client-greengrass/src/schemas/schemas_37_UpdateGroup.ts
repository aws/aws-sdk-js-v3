// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GI, _h, _N, _UG, _UGR, _UGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateGroupRequest = struct(n0, _UGR, 0, [_GI, _N], [[0, 1], 0]);
export var UpdateGroupResponse = struct(n0, _UGRp, 0, [], []);
export var UpdateGroup = op(
  n0,
  _UG,
  {
    [_h]: ["PUT", "/greengrass/groups/{GroupId}", 200],
  },
  () => UpdateGroupRequest,
  () => UpdateGroupResponse
);
