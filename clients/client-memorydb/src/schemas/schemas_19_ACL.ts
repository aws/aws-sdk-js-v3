// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ACLNotFoundFault as __ACLNotFoundFault,
  InvalidACLStateFault as __InvalidACLStateFault,
} from "../models/index";
import { _ACLNFF, _aQE, _c, _e, _hE, _IACLSF, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ACLNotFoundFault = error(
  n0,
  _ACLNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ACLNotFound`, 404],
  },
  [_m],
  [0],

  __ACLNotFoundFault
);
export var InvalidACLStateFault = error(
  n0,
  _IACLSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidACLState`, 400],
  },
  [_m],
  [0],

  __InvalidACLStateFault
);
