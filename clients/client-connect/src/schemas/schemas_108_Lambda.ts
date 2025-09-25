// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ALF, _ALFR, _CT, _cT, _DLF, _DLFR, _FA, _fA, _h, _hQ, _II, _iT, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateLambdaFunctionRequest = struct(n0, _ALFR, 0, [_II, _FA, _CT], [[0, 1], 0, [0, 4]]);
export var DisassociateLambdaFunctionRequest = struct(
  n0,
  _DLFR,
  0,
  [_II, _FA, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _fA,
      },
    ],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var AssociateLambdaFunction = op(
  n0,
  _ALF,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/lambda-function", 200],
  },
  () => AssociateLambdaFunctionRequest,
  () => Unit
);
export var DisassociateLambdaFunction = op(
  n0,
  _DLF,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/lambda-function", 200],
  },
  () => DisassociateLambdaFunctionRequest,
  () => Unit
);
