// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hQ,
  _jN,
  _pUA,
  _rAe,
  _RS,
  _sS,
  _sSO,
  _st,
  _tBC,
  _tD,
  _tDS,
  _tIC,
  _tIS,
  _tISIE,
  _tISIK,
  _tISo,
  _tISPD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourceProfileRequest = struct(
  n0,
  _GRPR,
  0,
  [_rAe],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var GetResourceProfileResponse = struct(
  n0,
  _GRPRe,
  0,
  [_pUA, _sS, _sSO, _st],
  [
    [
      5,
      {
        [_jN]: _pUA,
      },
    ],
    [
      1,
      {
        [_jN]: _sS,
      },
    ],
    [
      2,
      {
        [_jN]: _sSO,
      },
    ],
    [
      () => ResourceStatistics,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ResourceStatistics = struct(
  n0,
  _RS,
  0,
  [_tBC, _tD, _tDS, _tIC, _tIS, _tISo, _tISIE, _tISIK, _tISPD],
  [
    [
      1,
      {
        [_jN]: _tBC,
      },
    ],
    [
      1,
      {
        [_jN]: _tD,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
      },
    ],
    [
      1,
      {
        [_jN]: _tIC,
      },
    ],
    [
      1,
      {
        [_jN]: _tIS,
      },
    ],
    [
      1,
      {
        [_jN]: _tISo,
      },
    ],
    [
      1,
      {
        [_jN]: _tISIE,
      },
    ],
    [
      1,
      {
        [_jN]: _tISIK,
      },
    ],
    [
      1,
      {
        [_jN]: _tISPD,
      },
    ],
  ]
);
export var GetResourceProfile = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resource-profiles", 200],
  },
  () => GetResourceProfileRequest,
  () => GetResourceProfileResponse
);
