// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BucketAlreadyExists as __BucketAlreadyExists,
  BucketAlreadyOwnedByYou as __BucketAlreadyOwnedByYou,
} from "../models/index";
import {
  _ACL_,
  _B,
  _BA,
  _BAE,
  _BAOBY,
  _BI,
  _c,
  _CB,
  _CBC,
  _CBO,
  _CBR,
  _DR,
  _e,
  _GFC,
  _GR,
  _GRACP,
  _GW,
  _GWACP,
  _h,
  _hE,
  _hH,
  _hP,
  _L,
  _LC,
  _LI,
  _N,
  _OLEFB,
  _OO,
  _T,
  _Ty,
  _xaa,
  _xaba,
  _xabole,
  _xagfc,
  _xagr,
  _xagra,
  _xagw,
  _xagwa,
  _xaoo,
  _xN,
  n0,
  TagSet,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketAlreadyExists = error(
  n0,
  _BAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [],
  [],

  __BucketAlreadyExists
);
export var BucketAlreadyOwnedByYou = error(
  n0,
  _BAOBY,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [],
  [],

  __BucketAlreadyOwnedByYou
);
export var BucketInfo = struct(n0, _BI, 0, [_DR, _Ty], [0, 0]);
export var CreateBucketConfiguration = struct(
  n0,
  _CBC,
  0,
  [_LC, _L, _B, _T],
  [0, () => LocationInfo, () => BucketInfo, [() => TagSet, 0]]
);
export var CreateBucketOutput = struct(
  n0,
  _CBO,
  0,
  [_L, _BA],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _xaba,
      },
    ],
  ]
);
export var CreateBucketRequest = struct(
  n0,
  _CBR,
  0,
  [_ACL_, _B, _CBC, _GFC, _GR, _GRACP, _GW, _GWACP, _OLEFB, _OO],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [0, 1],
    [
      () => CreateBucketConfiguration,
      {
        [_xN]: _CBC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagw,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [
      2,
      {
        [_hH]: _xabole,
      },
    ],
    [
      0,
      {
        [_hH]: _xaoo,
      },
    ],
  ]
);
export var LocationInfo = struct(n0, _LI, 0, [_Ty, _N], [0, 0]);
export var CreateBucket = op(
  n0,
  _CB,
  {
    [_h]: ["PUT", "/", 200],
  },
  () => CreateBucketRequest,
  () => CreateBucketOutput
);
