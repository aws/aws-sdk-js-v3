// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CIR, _CIRr, _cT, _h, _i, _iD, _iN, _kKA, _tag, _wADD, n0 } from "./schemas_0";
import { Instance } from "./schemas_6_Instance";

/* eslint no-var: 0 */

export var CreateInstanceRequest = struct(
  n0,
  _CIR,
  0,
  [_iN, _iD, _kKA, _wADD, _tag, _cT],
  [0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var CreateInstanceResponse = struct(n0, _CIRr, 0, [_i], [() => Instance]);
export var TagMap = 128 | 0;

export var CreateInstance = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/api/instance", 200],
  },
  () => CreateInstanceRequest,
  () => CreateInstanceResponse
);
