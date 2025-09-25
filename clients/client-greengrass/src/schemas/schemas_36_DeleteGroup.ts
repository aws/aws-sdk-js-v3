// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _DGRe, _GI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGroupRequest = struct(n0, _DGR, 0, [_GI], [[0, 1]]);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [], []);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_h]: ["DELETE", "/greengrass/groups/{GroupId}", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);
