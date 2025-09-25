// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _cTl, _DA, _DAR, _DARe, _fD, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppRequest = struct(n0, _DAR, 0, [_aA, _fD, _cTl], [0, 2, [0, 4]]);
export var DeleteAppResponse = struct(n0, _DARe, 0, [_aA], [0]);
export var DeleteApp = op(
  n0,
  _DA,
  {
    [_h]: ["POST", "/delete-app", 200],
  },
  () => DeleteAppRequest,
  () => DeleteAppResponse
);
