// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyLengthExceededException as __PolicyLengthExceededException } from "../models/index";
import { _Act, _C, _c, _e, _EBN, _K, _m, _PLEE, _Po, _PP, _PPR, _Pri, _SI, _T, _V, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var Condition = struct(n0, _C, 0, [_T, _K, _V], [0, 0, 0]);
export var PolicyLengthExceededException = error(
  n0,
  _PLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PolicyLengthExceededException
);
export var PutPermissionRequest = struct(
  n0,
  _PPR,
  0,
  [_EBN, _Act, _Pri, _SI, _C, _Po],
  [0, 0, 0, 0, () => Condition, 0]
);
export var PutPermission = op(
  n0,
  _PP,
  0,
  () => PutPermissionRequest,
  () => Unit
);
