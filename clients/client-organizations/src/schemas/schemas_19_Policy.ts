// smithy-typescript generated code
import { error, op } from "@smithy/core/schema";

import { ResourcePolicyNotFoundException as __ResourcePolicyNotFoundException } from "../models/index";
import { _c, _DRP, _e, _hE, _M, _RPNFE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourcePolicyNotFoundException = error(
  n0,
  _RPNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourcePolicyNotFoundException
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => Unit,
  () => Unit
);
