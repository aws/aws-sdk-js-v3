// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cI,
  _h,
  _hH,
  _hQ,
  _iI,
  _ii,
  _LQASD,
  _LQASDI,
  _LQASDO,
  _nT,
  _QASD,
  _QASDL,
  _sA,
  _sD,
  _sI,
  _sIu,
  _ti,
  _U,
  _u,
  _uI,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListQAppSessionDataInput = struct(
  n0,
  _LQASDI,
  0,
  [_iI, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
  ]
);
export var ListQAppSessionDataOutput = struct(
  n0,
  _LQASDO,
  0,
  [_sI, _sA, _sD, _nT],
  [0, 0, () => QAppSessionDataList, 0]
);
export var QAppSessionData = struct(n0, _QASD, 0, [_cI, _v, _u, _sIu, _ti], [0, 15, () => User, 0, 5]);
export var User = struct(n0, _U, 0, [_uI], [0]);
export var QAppSessionDataList = list(n0, _QASDL, 0, () => QAppSessionData);
export var ListQAppSessionData = op(
  n0,
  _LQASD,
  {
    [_h]: ["GET", "/runtime.listQAppSessionData", 200],
  },
  () => ListQAppSessionDataInput,
  () => ListQAppSessionDataOutput
);
