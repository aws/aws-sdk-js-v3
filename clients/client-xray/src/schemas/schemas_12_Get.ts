// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _DGRe, _GARN, _GN, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGroupRequest = struct(n0, _DGR, 0, [_GN, _GARN], [0, 0]);
export var DeleteGroupResult = struct(n0, _DGRe, 0, [], []);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_h]: ["POST", "/DeleteGroup", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResult
);
