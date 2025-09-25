// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _AI, _c, _CE, _DR, _DRR, _e, _ER, _ERR, _eT, _h, _hE, _hH, _m, _RN, _xaE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _eT],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __ConflictException
);
export var DisableRegionRequest = struct(n0, _DRR, 0, [_AI, _RN], [0, 0]);
export var EnableRegionRequest = struct(n0, _ERR, 0, [_AI, _RN], [0, 0]);
export var DisableRegion = op(
  n0,
  _DR,
  {
    [_h]: ["POST", "/disableRegion", 200],
  },
  () => DisableRegionRequest,
  () => Unit
);
export var EnableRegion = op(
  n0,
  _ER,
  {
    [_h]: ["POST", "/enableRegion", 200],
  },
  () => EnableRegionRequest,
  () => Unit
);
