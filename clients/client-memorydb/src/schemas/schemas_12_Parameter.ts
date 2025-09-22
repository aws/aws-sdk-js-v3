// smithy-typescript generated code
import { error, struct } from "@smithy/core/schema";

import { InvalidParameterGroupStateFault as __InvalidParameterGroupStateFault } from "../models/index";
import { _aQE, _ARN, _c, _D, _e, _F, _hE, _IPGSF, _m, _N, _PG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidParameterGroupStateFault = error(
  n0,
  _IPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidParameterGroupStateFault
);
export var ParameterGroup = struct(n0, _PG, 0, [_N, _F, _D, _ARN], [0, 0, 0, 0]);
