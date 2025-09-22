// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConditionCheckFailureException as __ConditionCheckFailureException } from "../models/index";
import { _c, _CCFE, _DRPe, _DRPR, _DRPRe, _e, _M, _PHC, _RAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConditionCheckFailureException = error(
  n0,
  _CCFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConditionCheckFailureException
);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_PHC, _RAe], [0, 0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var DeleteResourcePolicy = op(
  n0,
  _DRPe,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
