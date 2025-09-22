// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { InvalidTypeException as __InvalidTypeException } from "../models/index";
import {
  _AL,
  _ALd,
  _ALL,
  _c,
  _DITL,
  _DITLR,
  _DITLRe,
  _DN,
  _dN,
  _e,
  _EV,
  _h,
  _hE,
  _hQ,
  _ICL,
  _IL,
  _IT,
  _ITE,
  _L,
  _LBR,
  _LN,
  _LV,
  _m,
  _MIC,
  _MICa,
  _SSTN,
  _STL,
  _STLL,
  _STLt,
  _STLto,
  _STN,
  _STt,
  _STto,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalLimit = struct(n0, _AL, 0, [_LN, _LV], [0, 64 | 0]);
export var DescribeInstanceTypeLimitsRequest = struct(
  n0,
  _DITLR,
  0,
  [_DN, _IT, _EV],
  [
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeInstanceTypeLimitsResponse = struct(n0, _DITLRe, 0, [_LBR], [() => LimitsByRole]);
export var InstanceCountLimits = struct(n0, _ICL, 0, [_MIC, _MICa], [1, 1]);
export var InstanceLimits = struct(n0, _IL, 0, [_ICL], [() => InstanceCountLimits]);
export var InvalidTypeException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __InvalidTypeException
);
export var Limits = struct(
  n0,
  _L,
  0,
  [_STto, _IL, _ALd],
  [() => StorageTypeList, () => InstanceLimits, () => AdditionalLimitList]
);
export var StorageType = struct(n0, _STt, 0, [_STN, _SSTN, _STL], [0, 0, () => StorageTypeLimitList]);
export var StorageTypeLimit = struct(n0, _STLt, 0, [_LN, _LV], [0, 64 | 0]);
export var AdditionalLimitList = list(n0, _ALL, 0, () => AdditionalLimit);
export var LimitValueList = 64 | 0;

export var StorageTypeLimitList = list(n0, _STLL, 0, () => StorageTypeLimit);
export var StorageTypeList = list(n0, _STLto, 0, () => StorageType);
export var LimitsByRole = map(n0, _LBR, 0, 0, () => Limits);
export var DescribeInstanceTypeLimits = op(
  n0,
  _DITL,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}", 200],
  },
  () => DescribeInstanceTypeLimitsRequest,
  () => DescribeInstanceTypeLimitsResponse
);
