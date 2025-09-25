// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DisableAlreadyInProgressException as __DisableAlreadyInProgressException } from "../models/index";
import { _c, _DAIPE, _DCAEPi, _DCAEPRi, _DCAEPRis, _DI, _e, _M, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableAlreadyInProgressException = error(
  n0,
  _DAIPE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DisableAlreadyInProgressException
);
export var DisableCAEnrollmentPolicyRequest = struct(n0, _DCAEPRi, 0, [_DI], [0]);
export var DisableCAEnrollmentPolicyResult = struct(n0, _DCAEPRis, 0, [], []);
export var DisableCAEnrollmentPolicy = op(
  n0,
  _DCAEPi,
  0,
  () => DisableCAEnrollmentPolicyRequest,
  () => DisableCAEnrollmentPolicyResult
);
