// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _aQE, _c, _DTG, _DTGI, _DTGO, _e, _hE, _M, _RIUE, _TGA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTargetGroupInput = struct(n0, _DTGI, 0, [_TGA], [0]);
export var DeleteTargetGroupOutput = struct(n0, _DTGO, 0, [], []);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceInUse`, 400],
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var DeleteTargetGroup = op(
  n0,
  _DTG,
  0,
  () => DeleteTargetGroupInput,
  () => DeleteTargetGroupOutput
);
