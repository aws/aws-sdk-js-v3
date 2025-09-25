// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aIp, _cA, _dN, _hQ, _ht, _I, _iI, _In, _in, _LI, _LIR, _LIRi, _mRa, _nT, _s, _uA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Index = struct(n0, _I, 0, [_dN, _iI, _cA, _uA, _s], [0, 0, 4, 4, 0]);
export var ListIndicesRequest = struct(
  n0,
  _LIR,
  0,
  [_aIp, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListIndicesResponse = struct(n0, _LIRi, 0, [_nT, _in], [0, () => Indices]);
export var Indices = list(n0, _In, 0, () => Index);
export var ListIndices = op(
  n0,
  _LI,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices", 200],
  },
  () => ListIndicesRequest,
  () => ListIndicesResponse
);
