// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _DGRe, _GI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGroupRequest = struct(n0, _DGR, 0, [_OI, _GI], [0, 0]);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [], []);
export var DeleteGroup = op(
  n0,
  _DG,
  2,
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);
