// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ClusterNotFoundFault as __ClusterNotFoundFault } from "../models/index";
import { _aQE, _c, _CNFF, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterNotFoundFault = error(
  n0,
  _CNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ClusterNotFound`, 404],
  },
  [_m],
  [0],

  __ClusterNotFoundFault
);
