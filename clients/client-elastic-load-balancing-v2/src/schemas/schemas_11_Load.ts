// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidSecurityGroupException as __InvalidSecurityGroupException } from "../models/index";
import { _aQE, _c, _e, _ESGIROPLT, _hE, _ISGE, _LBAo, _M, _SG, _SGI, _SSG, _SSGI, _SSGO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidSecurityGroupException = error(
  n0,
  _ISGE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSecurityGroup`, 400],
  },
  [_M],
  [0],

  __InvalidSecurityGroupException
);
export var SetSecurityGroupsInput = struct(n0, _SSGI, 0, [_LBAo, _SG, _ESGIROPLT], [0, 64 | 0, 0]);
export var SetSecurityGroupsOutput = struct(n0, _SSGO, 0, [_SGI, _ESGIROPLT], [64 | 0, 0]);
export var SecurityGroups = 64 | 0;

export var SetSecurityGroups = op(
  n0,
  _SSG,
  0,
  () => SetSecurityGroupsInput,
  () => SetSecurityGroupsOutput
);
