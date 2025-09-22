// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import { _ADE, _aQE, _c, _e, _h, _hE, _M, _SDI, _SDO, _SDt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDenied`, 403],
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var StartDiscoveryInput = struct(n0, _SDI, 0, [], []);
export var StartDiscoveryOutput = struct(n0, _SDO, 0, [], []);
export var StartDiscovery = op(
  n0,
  _SDt,
  {
    [_h]: ["POST", "/start-discovery", 200],
  },
  () => StartDiscoveryInput,
  () => StartDiscoveryOutput
);
