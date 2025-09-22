// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _AK, _AKp, _aKp, _de, _del, _ex, _h, _hQ, _i, _LAK, _LAKR, _LAKRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKey = struct(n0, _AK, 0, [_i, _de, _ex, _del], [0, 0, 1, 1]);
export var ListApiKeysRequest = struct(
  n0,
  _LAKR,
  0,
  [_aI, _nT, _mR],
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListApiKeysResponse = struct(n0, _LAKRi, 0, [_aKp, _nT], [() => ApiKeys, 0]);
export var ApiKeys = list(n0, _AKp, 0, () => ApiKey);
export var ListApiKeys = op(
  n0,
  _LAK,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/apikeys", 200],
  },
  () => ListApiKeysRequest,
  () => ListApiKeysResponse
);
