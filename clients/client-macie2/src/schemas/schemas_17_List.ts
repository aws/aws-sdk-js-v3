// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _ALC,
  _ALS,
  _bN,
  _cA,
  _CAL,
  _CALR,
  _CALRr,
  _co,
  _cr,
  _cT,
  _d,
  _GAL,
  _GALR,
  _GALRe,
  _h,
  _i,
  _iT,
  _jN,
  _n,
  _oK,
  _r,
  _s,
  _SWL,
  _sWL,
  _t,
  _uA,
  _UAL,
  _UALR,
  _UALRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllowListCriteria = struct(
  n0,
  _ALC,
  0,
  [_r, _sWL],
  [
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      () => S3WordsList,
      {
        [_jN]: _sWL,
      },
    ],
  ]
);
export var AllowListStatus = struct(
  n0,
  _ALS,
  0,
  [_co, _d],
  [
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var CreateAllowListRequest = struct(
  n0,
  _CALR,
  0,
  [_cT, _cr, _d, _n, _t],
  [
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      () => AllowListCriteria,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateAllowListResponse = struct(
  n0,
  _CALRr,
  0,
  [_a, _i],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var GetAllowListRequest = struct(n0, _GALR, 0, [_i], [[0, 1]]);
export var GetAllowListResponse = struct(
  n0,
  _GALRe,
  0,
  [_a, _cA, _cr, _d, _i, _n, _s, _t, _uA],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => AllowListCriteria,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => AllowListStatus,
      {
        [_jN]: _s,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var S3WordsList = struct(
  n0,
  _SWL,
  0,
  [_bN, _oK],
  [
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      0,
      {
        [_jN]: _oK,
      },
    ],
  ]
);
export var UpdateAllowListRequest = struct(
  n0,
  _UALR,
  0,
  [_cr, _d, _i, _n],
  [
    [
      () => AllowListCriteria,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var UpdateAllowListResponse = struct(
  n0,
  _UALRp,
  0,
  [_a, _i],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var CreateAllowList = op(
  n0,
  _CAL,
  {
    [_h]: ["POST", "/allow-lists", 200],
  },
  () => CreateAllowListRequest,
  () => CreateAllowListResponse
);
export var GetAllowList = op(
  n0,
  _GAL,
  {
    [_h]: ["GET", "/allow-lists/{id}", 200],
  },
  () => GetAllowListRequest,
  () => GetAllowListResponse
);
export var UpdateAllowList = op(
  n0,
  _UAL,
  {
    [_h]: ["PUT", "/allow-lists/{id}", 200],
  },
  () => UpdateAllowListRequest,
  () => UpdateAllowListResponse
);
