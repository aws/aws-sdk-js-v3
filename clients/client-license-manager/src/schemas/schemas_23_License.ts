// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _aQE, _c, _e, _hE, _M, _RNFE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResource.NotFound`, 400],
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
