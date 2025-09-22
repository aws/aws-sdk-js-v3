// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ResourceArnNotFoundException as __ResourceArnNotFoundException } from "../models/index";
import { _aQE, _c, _e, _hE, _m, _RANFE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceArnNotFoundException = error(
  n0,
  _RANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceArn.NotFound`, 400],
  },
  [_m],
  [0],

  __ResourceArnNotFoundException
);
