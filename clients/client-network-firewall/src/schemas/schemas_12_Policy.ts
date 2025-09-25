// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidResourcePolicyException as __InvalidResourcePolicyException } from "../models/index";
import { _c, _DRP, _DRPR, _DRPRe, _e, _IRPE, _M, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA], [0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var InvalidResourcePolicyException = error(
  n0,
  _IRPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidResourcePolicyException
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
