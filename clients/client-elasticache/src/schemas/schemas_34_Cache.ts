// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CacheClusterNotFoundFault as __CacheClusterNotFoundFault } from "../models/index";
import { _aQE, _c, _CCNFF, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CacheClusterNotFoundFault = error(
  n0,
  _CCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CacheClusterNotFound`, 404],
  },
  [_m],
  [0],

  __CacheClusterNotFoundFault
);
