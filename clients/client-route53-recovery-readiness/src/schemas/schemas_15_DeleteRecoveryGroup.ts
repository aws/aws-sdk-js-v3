// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRG, _DRGR, _h, _RGN, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_List";

/* eslint no-var: 0 */

export var DeleteRecoveryGroupRequest = struct(n0, _DRGR, 0, [_RGN], [[0, 1]]);
export var DeleteRecoveryGroup = op(
  n0,
  _DRG,
  {
    [_h]: ["DELETE", "/recoverygroups/{RecoveryGroupName}", 204],
  },
  () => DeleteRecoveryGroupRequest,
  () => Unit
);
