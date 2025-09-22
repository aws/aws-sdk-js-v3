// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aCd,
  _aIu,
  _au,
  _b,
  _cCI,
  _cl,
  _cSl,
  _eDn,
  _GU,
  _GUR,
  _h,
  _hM,
  _hQ,
  _ht,
  _it,
  _jN,
  _kI,
  _la,
  _li,
  _lo,
  _LOU,
  _MOKU,
  _MOSTL,
  _mVH,
  _p,
  _pIr,
  _pO,
  _po,
  _pWQS,
  _rAI,
  _rI,
  _sDt,
  _st,
  _sV,
  _TIA,
  _TIAR,
  _TIARe,
  _TIM,
  _TIMR,
  _TIMRe,
  _U,
  _uPI,
  _UU,
  _UUR,
  _val,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetUsageRequest = struct(
  n0,
  _GUR,
  0,
  [_uPI, _kI, _sDt, _eDn, _p, _li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _kI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sDt,
      },
    ],
    [
      0,
      {
        [_hQ]: _eDn,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var TestInvokeAuthorizerRequest = struct(
  n0,
  _TIAR,
  0,
  [_rAI, _aIu, _h, _mVH, _pWQS, _b, _sV, _aCd],
  [[0, 1], [0, 1], 128 | 0, map(n0, _MOSTL, 0, 0, 64 | 0), 0, 0, 128 | 0, 128 | 0]
);
export var TestInvokeAuthorizerResponse = struct(
  n0,
  _TIARe,
  0,
  [_cSl, _lo, _la, _pIr, _po, _au, _cl],
  [1, 0, 1, 0, 0, map(n0, _MOSTL, 0, 0, 64 | 0), 128 | 0]
);
export var TestInvokeMethodRequest = struct(
  n0,
  _TIMR,
  0,
  [_rAI, _rI, _hM, _pWQS, _b, _h, _mVH, _cCI, _sV],
  [[0, 1], [0, 1], [0, 1], 0, 0, 128 | 0, map(n0, _MOSTL, 0, 0, 64 | 0), 0, 128 | 0]
);
export var TestInvokeMethodResponse = struct(
  n0,
  _TIMRe,
  0,
  [_st, _b, _h, _mVH, _lo, _la],
  [1, 0, 128 | 0, map(n0, _MOSTL, 0, 0, 64 | 0), 0, 1]
);
export var UpdateUsageRequest = struct(n0, _UUR, 0, [_uPI, _kI, _pO], [[0, 1], [0, 1], () => ListOfPatchOperation]);
export var Usage = struct(
  n0,
  _U,
  0,
  [_uPI, _sDt, _eDn, _it, _p],
  [
    0,
    0,
    0,
    [
      map(n0, _MOKU, 0, 0, list(n0, _LOU, 0, 64 | 1)),
      {
        [_jN]: _val,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var ListOfLong = 64 | 1;

export var ListOfUsage = list(n0, _LOU, 0, 64 | 1);
export var MapOfKeyUsages = map(n0, _MOKU, 0, 0, list(n0, _LOU, 0, 64 | 1));
export var MapOfStringToList = map(n0, _MOSTL, 0, 0, 64 | 0);
export var GetUsage = op(
  n0,
  _GU,
  {
    [_ht]: ["GET", "/usageplans/{usagePlanId}/usage", 200],
  },
  () => GetUsageRequest,
  () => Usage
);
export var TestInvokeAuthorizer = op(
  n0,
  _TIA,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/authorizers/{authorizerId}", 200],
  },
  () => TestInvokeAuthorizerRequest,
  () => TestInvokeAuthorizerResponse
);
export var TestInvokeMethod = op(
  n0,
  _TIM,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", 200],
  },
  () => TestInvokeMethodRequest,
  () => TestInvokeMethodResponse
);
export var UpdateUsage = op(
  n0,
  _UU,
  {
    [_ht]: ["PATCH", "/usageplans/{usagePlanId}/keys/{keyId}/usage", 200],
  },
  () => UpdateUsageRequest,
  () => Usage
);
