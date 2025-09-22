// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _a,
  _ADE,
  _c,
  _cA,
  _cB,
  _e,
  _GN,
  _GNR,
  _GNRe,
  _GTB,
  _GTBR,
  _GTBRe,
  _h,
  _hE,
  _m,
  _n,
  _na,
  _nI,
  _oAI,
  _t,
  _tBARN,
  _tBI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var GetNamespaceRequest = struct(
  n0,
  _GNR,
  0,
  [_tBARN, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetNamespaceResponse = struct(n0, _GNRe, 0, [_n, _cA, _cB, _oAI, _nI, _tBI], [64 | 0, 5, 0, 0, 0, 0]);
export var GetTableBucketRequest = struct(n0, _GTBR, 0, [_tBARN], [[0, 1]]);
export var GetTableBucketResponse = struct(n0, _GTBRe, 0, [_a, _na, _oAI, _cA, _tBI, _t], [0, 0, 0, 5, 0, 0]);
export var GetNamespace = op(
  n0,
  _GN,
  {
    [_h]: ["GET", "/namespaces/{tableBucketARN}/{namespace}", 200],
  },
  () => GetNamespaceRequest,
  () => GetNamespaceResponse
);
export var GetTableBucket = op(
  n0,
  _GTB,
  {
    [_h]: ["GET", "/buckets/{tableBucketARN}", 200],
  },
  () => GetTableBucketRequest,
  () => GetTableBucketResponse
);
