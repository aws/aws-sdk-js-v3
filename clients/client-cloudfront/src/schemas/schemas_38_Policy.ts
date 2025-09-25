// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CachePolicyAlreadyExists as __CachePolicyAlreadyExists,
  OriginRequestPolicyAlreadyExists as __OriginRequestPolicyAlreadyExists,
  TooManyCachePolicies as __TooManyCachePolicies,
  TooManyCookiesInCachePolicy as __TooManyCookiesInCachePolicy,
  TooManyCookiesInOriginRequestPolicy as __TooManyCookiesInOriginRequestPolicy,
  TooManyHeadersInCachePolicy as __TooManyHeadersInCachePolicy,
  TooManyHeadersInOriginRequestPolicy as __TooManyHeadersInOriginRequestPolicy,
  TooManyOriginRequestPolicies as __TooManyOriginRequestPolicies,
  TooManyQueryStringsInCachePolicy as __TooManyQueryStringsInCachePolicy,
  TooManyQueryStringsInOriginRequestPolicy as __TooManyQueryStringsInOriginRequestPolicy,
} from "../models/index";
import {
  _c,
  _CBo,
  _CC,
  _CCP,
  _CCPR,
  _CCPRr,
  _Co,
  _Coo,
  _CORP,
  _CORPR,
  _CORPRr,
  _CP,
  _CPAE,
  _CPC,
  _CPCC,
  _CPHC,
  _CPQSC,
  _DTTL,
  _e,
  _EAEB,
  _EAEG,
  _ET,
  _H,
  _h,
  _HB,
  _HC,
  _hE,
  _hH,
  _hP,
  _I,
  _Id,
  _L,
  _LMT,
  _M,
  _MTTL,
  _MTTLa,
  _N,
  _ORP,
  _ORPAE,
  _ORPC,
  _ORPCC,
  _ORPHC,
  _ORPQSC,
  _PICKAFTO,
  _Q,
  _QS,
  _QSB,
  _QSC,
  _QSN,
  _QSNL,
  _TMCICP,
  _TMCIORP,
  _TMCP,
  _TMHICP,
  _TMHIORP,
  _TMORP,
  _TMQSICP,
  _TMQSIORP,
  _xN,
  CookieNames,
  Headers,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CachePolicy = struct(n0, _CP, 0, [_Id, _LMT, _CPC], [0, 4, [() => CachePolicyConfig, 0]]);
export var CachePolicyAlreadyExists = error(
  n0,
  _CPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CachePolicyAlreadyExists
);
export var CachePolicyConfig = struct(
  n0,
  _CPC,
  0,
  [_Co, _N, _DTTL, _MTTLa, _MTTL, _PICKAFTO],
  [0, 0, 1, 1, 1, [() => ParametersInCacheKeyAndForwardedToOrigin, 0]]
);
export var CachePolicyCookiesConfig = struct(n0, _CPCC, 0, [_CBo, _Coo], [0, [() => CookieNames, 0]]);
export var CachePolicyHeadersConfig = struct(n0, _CPHC, 0, [_HB, _H], [0, [() => Headers, 0]]);
export var CachePolicyQueryStringsConfig = struct(n0, _CPQSC, 0, [_QSB, _QS], [0, [() => QueryStringNames, 0]]);
export var CreateCachePolicyRequest = struct(
  n0,
  _CCPR,
  0,
  [_CPC],
  [
    [
      () => CachePolicyConfig,
      {
        [_xN]: _CPC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateCachePolicyResult = struct(
  n0,
  _CCPRr,
  0,
  [_CP, _L, _ET],
  [
    [() => CachePolicy, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateOriginRequestPolicyRequest = struct(
  n0,
  _CORPR,
  0,
  [_ORPC],
  [
    [
      () => OriginRequestPolicyConfig,
      {
        [_xN]: _ORPC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateOriginRequestPolicyResult = struct(
  n0,
  _CORPRr,
  0,
  [_ORP, _L, _ET],
  [
    [() => OriginRequestPolicy, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var OriginRequestPolicy = struct(n0, _ORP, 0, [_Id, _LMT, _ORPC], [0, 4, [() => OriginRequestPolicyConfig, 0]]);
export var OriginRequestPolicyAlreadyExists = error(
  n0,
  _ORPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OriginRequestPolicyAlreadyExists
);
export var OriginRequestPolicyConfig = struct(
  n0,
  _ORPC,
  0,
  [_Co, _N, _HC, _CC, _QSC],
  [
    0,
    0,
    [() => OriginRequestPolicyHeadersConfig, 0],
    [() => OriginRequestPolicyCookiesConfig, 0],
    [() => OriginRequestPolicyQueryStringsConfig, 0],
  ]
);
export var OriginRequestPolicyCookiesConfig = struct(n0, _ORPCC, 0, [_CBo, _Coo], [0, [() => CookieNames, 0]]);
export var OriginRequestPolicyHeadersConfig = struct(n0, _ORPHC, 0, [_HB, _H], [0, [() => Headers, 0]]);
export var OriginRequestPolicyQueryStringsConfig = struct(
  n0,
  _ORPQSC,
  0,
  [_QSB, _QS],
  [0, [() => QueryStringNames, 0]]
);
export var ParametersInCacheKeyAndForwardedToOrigin = struct(
  n0,
  _PICKAFTO,
  0,
  [_EAEG, _EAEB, _HC, _CC, _QSC],
  [
    2,
    2,
    [() => CachePolicyHeadersConfig, 0],
    [() => CachePolicyCookiesConfig, 0],
    [() => CachePolicyQueryStringsConfig, 0],
  ]
);
export var QueryStringNames = struct(n0, _QSN, 0, [_Q, _I], [1, [() => QueryStringNamesList, 0]]);
export var TooManyCachePolicies = error(
  n0,
  _TMCP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCachePolicies
);
export var TooManyCookiesInCachePolicy = error(
  n0,
  _TMCICP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCookiesInCachePolicy
);
export var TooManyCookiesInOriginRequestPolicy = error(
  n0,
  _TMCIORP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCookiesInOriginRequestPolicy
);
export var TooManyHeadersInCachePolicy = error(
  n0,
  _TMHICP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyHeadersInCachePolicy
);
export var TooManyHeadersInOriginRequestPolicy = error(
  n0,
  _TMHIORP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyHeadersInOriginRequestPolicy
);
export var TooManyOriginRequestPolicies = error(
  n0,
  _TMORP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyOriginRequestPolicies
);
export var TooManyQueryStringsInCachePolicy = error(
  n0,
  _TMQSICP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyQueryStringsInCachePolicy
);
export var TooManyQueryStringsInOriginRequestPolicy = error(
  n0,
  _TMQSIORP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyQueryStringsInOriginRequestPolicy
);
export var QueryStringNamesList = list(n0, _QSNL, 0, [
  0,
  {
    [_xN]: _N,
  },
]);
export var CreateCachePolicy = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/2020-05-31/cache-policy", 201],
  },
  () => CreateCachePolicyRequest,
  () => CreateCachePolicyResult
);
export var CreateOriginRequestPolicy = op(
  n0,
  _CORP,
  {
    [_h]: ["POST", "/2020-05-31/origin-request-policy", 201],
  },
  () => CreateOriginRequestPolicyRequest,
  () => CreateOriginRequestPolicyResult
);
