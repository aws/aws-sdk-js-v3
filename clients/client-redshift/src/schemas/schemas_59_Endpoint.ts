// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { EndpointNotFoundFault as __EndpointNotFoundFault } from "../models/index";
import { _aQE, _c, _e, _ENFF, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EndpointNotFoundFault = error(
  n0,
  _ENFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`EndpointNotFound`, 404],
  },
  [_m],
  [0],

  __EndpointNotFoundFault
);
