// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidGrantIdException as __InvalidGrantIdException } from "../models/index";
import { _aQE, _c, _DR, _e, _GI, _GTr, _hE, _IGIE, _KI, _m, _RG, _RGe, _RGR, _RGRe, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidGrantIdException = error(
  n0,
  _IGIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidGrantId`, 400],
  },
  [_m],
  [0],

  __InvalidGrantIdException
);
export var RetireGrantRequest = struct(n0, _RGR, 0, [_GTr, _KI, _GI, _DR], [0, 0, 0, 2]);
export var RevokeGrantRequest = struct(n0, _RGRe, 0, [_KI, _GI, _DR], [0, 0, 2]);
export var RetireGrant = op(
  n0,
  _RG,
  0,
  () => RetireGrantRequest,
  () => Unit
);
export var RevokeGrant = op(
  n0,
  _RGe,
  0,
  () => RevokeGrantRequest,
  () => Unit
);
