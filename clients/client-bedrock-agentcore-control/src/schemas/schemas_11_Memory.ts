// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceException as __ServiceException, ThrottledException as __ThrottledException } from "../models/index";
import { _c, _cTl, _DM, _DMI, _DMO, _e, _h, _hE, _hQ, _iT, _m, _mI, _s, _SE, _se, _TE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMemoryInput = struct(
  n0,
  _DMI,
  0,
  [_cTl, _mI],
  [
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [0, 1],
  ]
);
export var DeleteMemoryOutput = struct(n0, _DMO, 0, [_mI, _s], [0, 0]);
export var ServiceException = error(
  n0,
  _SE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __ServiceException
);
export var ThrottledException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottledException
);
export var DeleteMemory = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/memories/{memoryId}/delete", 200],
  },
  () => DeleteMemoryInput,
  () => DeleteMemoryOutput
);
