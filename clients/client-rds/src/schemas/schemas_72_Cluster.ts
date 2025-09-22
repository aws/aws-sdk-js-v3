// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  GlobalClusterNotFoundFault as __GlobalClusterNotFoundFault,
  InvalidGlobalClusterStateFault as __InvalidGlobalClusterStateFault,
} from "../models/index";
import { _aQE, _c, _e, _GCNFF, _hE, _IGCSF, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GlobalClusterNotFoundFault = error(
  n0,
  _GCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`GlobalClusterNotFoundFault`, 404],
  },
  [_m],
  [0],

  __GlobalClusterNotFoundFault
);
export var InvalidGlobalClusterStateFault = error(
  n0,
  _IGCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidGlobalClusterStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidGlobalClusterStateFault
);
