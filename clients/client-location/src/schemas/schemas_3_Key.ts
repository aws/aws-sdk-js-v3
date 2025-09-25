// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AA,
  _AKR,
  _AR,
  _ARl,
  _CT,
  _De,
  _DKe,
  _DKRes,
  _DKResc,
  _en,
  _ET,
  _FU,
  _h,
  _K,
  _KA,
  _KN,
  _NE,
  _Re,
  _RP,
  _RPL,
  _Ta,
  _UK,
  _UKR,
  _UKRp,
  _UT,
  n0,
  Timestamp,
} from "./schemas_0";
import { ApiKey } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var RefererPattern = sim(n0, _RP, 0, 8);
export var ApiKeyRestrictions = struct(n0, _AKR, 0, [_AA, _AR, _ARl], [64 | 0, 64 | 0, [() => RefererPatternList, 0]]);
export var DescribeKeyRequest = struct(n0, _DKRes, 0, [_KN], [[0, 1]]);
export var DescribeKeyResponse = struct(
  n0,
  _DKResc,
  0,
  [_K, _KA, _KN, _Re, _CT, _ET, _UT, _De, _Ta],
  [
    [() => ApiKey, 0],
    0,
    0,
    [() => ApiKeyRestrictions, 0],
    [() => Timestamp, 0],
    [() => Timestamp, 0],
    [() => Timestamp, 0],
    0,
    128 | 0,
  ]
);
export var UpdateKeyRequest = struct(
  n0,
  _UKR,
  0,
  [_KN, _De, _ET, _NE, _FU, _Re],
  [[0, 1], 0, [() => Timestamp, 0], 2, 2, [() => ApiKeyRestrictions, 0]]
);
export var UpdateKeyResponse = struct(n0, _UKRp, 0, [_KA, _KN, _UT], [0, 0, [() => Timestamp, 0]]);
export var ApiKeyActionList = 64 | 0;

export var GeoArnList = 64 | 0;

export var RefererPatternList = list(n0, _RPL, 0, [() => RefererPattern, 0]);
export var DescribeKey = op(
  n0,
  _DKe,
  {
    [_h]: ["GET", "/metadata/v0/keys/{KeyName}", 200],
    [_en]: ["cp.metadata."],
  },
  () => DescribeKeyRequest,
  () => DescribeKeyResponse
);
export var UpdateKey = op(
  n0,
  _UK,
  {
    [_h]: ["PATCH", "/metadata/v0/keys/{KeyName}", 200],
    [_en]: ["cp.metadata."],
  },
  () => UpdateKeyRequest,
  () => UpdateKeyResponse
);
