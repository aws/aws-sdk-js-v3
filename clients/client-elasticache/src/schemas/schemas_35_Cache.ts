// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CacheParameterGroupNotFoundFault as __CacheParameterGroupNotFoundFault } from "../models/index";
import { _aQE, _c, _CPGNFF, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CacheParameterGroupNotFoundFault = error(
  n0,
  _CPGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CacheParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __CacheParameterGroupNotFoundFault
);
