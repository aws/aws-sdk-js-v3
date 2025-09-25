// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AE,
  _aEA,
  _aEc,
  _cA,
  _cN,
  _cRT,
  _DAEe,
  _DAERes,
  _DAEResc,
  _ht,
  _kG,
  _mA,
  _pA,
  _t,
  _ty,
  _u,
  _UAE,
  _UAER,
  _UAERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessEntry = struct(
  n0,
  _AE,
  0,
  [_cN, _pA, _kG, _aEA, _cA, _mA, _t, _u, _ty],
  [0, 0, 64 | 0, 0, 4, 4, 128 | 0, 0, 0]
);
export var DescribeAccessEntryRequest = struct(
  n0,
  _DAERes,
  0,
  [_cN, _pA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAccessEntryResponse = struct(n0, _DAEResc, 0, [_aEc], [() => AccessEntry]);
export var UpdateAccessEntryRequest = struct(
  n0,
  _UAER,
  0,
  [_cN, _pA, _kG, _cRT, _u],
  [[0, 1], [0, 1], 64 | 0, [0, 4], 0]
);
export var UpdateAccessEntryResponse = struct(n0, _UAERp, 0, [_aEc], [() => AccessEntry]);
export var DescribeAccessEntry = op(
  n0,
  _DAEe,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/access-entries/{principalArn}", 200],
  },
  () => DescribeAccessEntryRequest,
  () => DescribeAccessEntryResponse
);
export var UpdateAccessEntry = op(
  n0,
  _UAE,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/access-entries/{principalArn}", 200],
  },
  () => UpdateAccessEntryRequest,
  () => UpdateAccessEntryResponse
);
