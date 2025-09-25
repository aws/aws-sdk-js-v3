// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BucketAlreadyExists as __BucketAlreadyExists,
  BucketAlreadyOwnedByYou as __BucketAlreadyOwnedByYou,
} from "../models/index";
import {
  _ACL,
  _B,
  _BA,
  _BAE,
  _BAOBY,
  _c,
  _CBC,
  _CBR,
  _CBr,
  _CBRr,
  _e,
  _GFC,
  _GR,
  _GRACP,
  _GW,
  _GWACP,
  _h,
  _hCR,
  _hH,
  _hP,
  _L,
  _LC,
  _OI,
  _OLEFB,
  _xaa,
  _xabole,
  _xagfc,
  _xagr,
  _xagra,
  _xagw,
  _xagwa,
  _xaoi,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketAlreadyExists = error(
  n0,
  _BAE,
  {
    [_e]: _c,
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
  },
  [],
  [],

  __BucketAlreadyOwnedByYou
);
export var CreateBucketConfiguration = struct(n0, _CBC, 0, [_LC], [0]);
export var CreateBucketRequest = struct(
  n0,
  _CBR,
  0,
  [_ACL, _B, _CBC, _GFC, _GR, _GRACP, _GW, _GWACP, _OLEFB, _OI],
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
        [_hH]: _xaoi,
      },
    ],
  ]
);
export var CreateBucketResult = struct(
  n0,
  _CBRr,
  0,
  [_L, _BA],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    0,
  ]
);
export var CreateBucket = op(
  n0,
  _CBr,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}", 200],
    [_hCR]: 1,
  },
  () => CreateBucketRequest,
  () => CreateBucketResult
);
