// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRC, _DRCR, _h, _RCN, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_List";

/* eslint no-var: 0 */

export var DeleteReadinessCheckRequest = struct(n0, _DRCR, 0, [_RCN], [[0, 1]]);
export var DeleteReadinessCheck = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/readinesschecks/{ReadinessCheckName}", 204],
  },
  () => DeleteReadinessCheckRequest,
  () => Unit
);
