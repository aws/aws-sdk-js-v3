// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ScalingActivityInProgressFault as __ScalingActivityInProgressFault } from "../models/index";
import { _aQE, _ASGN, _BT, _c, _e, _EP, _EPT, _HC, _hE, _m, _MV, _PN, _SAIPF, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ExecutePolicyType = struct(n0, _EPT, 0, [_ASGN, _PN, _HC, _MV, _BT], [0, 0, 2, 1, 1]);
export var ScalingActivityInProgressFault = error(
  n0,
  _SAIPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScalingActivityInProgress`, 400],
  },
  [_m],
  [0],

  __ScalingActivityInProgressFault
);
export var ExecutePolicy = op(
  n0,
  _EP,
  0,
  () => ExecutePolicyType,
  () => Unit
);
