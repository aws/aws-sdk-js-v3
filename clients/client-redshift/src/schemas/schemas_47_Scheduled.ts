// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ScheduledActionNotFoundFault as __ScheduledActionNotFoundFault } from "../models/index";
import { _aQE, _c, _DSAe, _DSAM, _e, _hE, _m, _SAN, _SANFF, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScheduledActionMessage = struct(n0, _DSAM, 0, [_SAN], [0]);
export var ScheduledActionNotFoundFault = error(
  n0,
  _SANFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScheduledActionNotFound`, 400],
  },
  [_m],
  [0],

  __ScheduledActionNotFoundFault
);
export var DeleteScheduledAction = op(
  n0,
  _DSAe,
  0,
  () => DeleteScheduledActionMessage,
  () => Unit
);
