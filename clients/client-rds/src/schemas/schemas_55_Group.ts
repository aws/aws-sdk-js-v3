// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidOptionGroupStateFault as __InvalidOptionGroupStateFault } from "../models/index";
import { _aQE, _c, _DOG, _DOGM, _e, _hE, _IOGSF, _m, _OGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOptionGroupMessage = struct(n0, _DOGM, 0, [_OGN], [0]);
export var InvalidOptionGroupStateFault = error(
  n0,
  _IOGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidOptionGroupStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidOptionGroupStateFault
);
export var DeleteOptionGroup = op(
  n0,
  _DOG,
  0,
  () => DeleteOptionGroupMessage,
  () => Unit
);
