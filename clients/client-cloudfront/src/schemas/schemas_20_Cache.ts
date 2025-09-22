// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CachePolicyInUse as __CachePolicyInUse, NoSuchCachePolicy as __NoSuchCachePolicy } from "../models/index";
import {
  _c,
  _CP,
  _CPC,
  _CPI,
  _CPIU,
  _CPL,
  _CPS,
  _CPSL,
  _DCP,
  _DCPR,
  _DIL,
  _e,
  _ET,
  _GCP,
  _GCPC,
  _GCPCR,
  _GCPCRe,
  _GCPR,
  _GCPRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _IM,
  _IM_,
  _LCP,
  _LCPR,
  _LCPRi,
  _LDBCPI,
  _LDBCPIR,
  _LDBCPIRi,
  _M,
  _Ma,
  _MI,
  _NM,
  _NSCP,
  _Q,
  _T,
  _UCP,
  _UCPR,
  _UCPRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { CachePolicy, CachePolicyConfig } from "./schemas_38_Policy";
import { DistributionIdList } from "./schemas_39_ListDistributions";

/* eslint no-var: 0 */

export var CachePolicyInUse = error(
  n0,
  _CPIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CachePolicyInUse
);
export var CachePolicyList = struct(n0, _CPL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => CachePolicySummaryList, 0]]);
export var CachePolicySummary = struct(n0, _CPS, 0, [_T, _CP], [0, [() => CachePolicy, 0]]);
export var DeleteCachePolicyRequest = struct(
  n0,
  _DCPR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var GetCachePolicyConfigRequest = struct(n0, _GCPCR, 0, [_Id], [[0, 1]]);
export var GetCachePolicyConfigResult = struct(
  n0,
  _GCPCRe,
  0,
  [_CPC, _ET],
  [
    [() => CachePolicyConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetCachePolicyRequest = struct(n0, _GCPR, 0, [_Id], [[0, 1]]);
export var GetCachePolicyResult = struct(
  n0,
  _GCPRe,
  0,
  [_CP, _ET],
  [
    [() => CachePolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListCachePoliciesRequest = struct(
  n0,
  _LCPR,
  0,
  [_T, _Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _T,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListCachePoliciesResult = struct(n0, _LCPRi, 0, [_CPL], [[() => CachePolicyList, 16]]);
export var ListDistributionsByCachePolicyIdRequest = struct(
  n0,
  _LDBCPIR,
  0,
  [_Ma, _MI, _CPI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByCachePolicyIdResult = struct(n0, _LDBCPIRi, 0, [_DIL], [[() => DistributionIdList, 16]]);
export var NoSuchCachePolicy = error(
  n0,
  _NSCP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchCachePolicy
);
export var UpdateCachePolicyRequest = struct(
  n0,
  _UCPR,
  0,
  [_CPC, _Id, _IM],
  [
    [
      () => CachePolicyConfig,
      {
        [_xN]: _CPC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateCachePolicyResult = struct(
  n0,
  _UCPRp,
  0,
  [_CP, _ET],
  [
    [() => CachePolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CachePolicySummaryList = list(n0, _CPSL, 0, [
  () => CachePolicySummary,
  {
    [_xN]: _CPS,
  },
]);
export var DeleteCachePolicy = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/2020-05-31/cache-policy/{Id}", 204],
  },
  () => DeleteCachePolicyRequest,
  () => Unit
);
export var GetCachePolicy = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/2020-05-31/cache-policy/{Id}", 200],
  },
  () => GetCachePolicyRequest,
  () => GetCachePolicyResult
);
export var GetCachePolicyConfig = op(
  n0,
  _GCPC,
  {
    [_h]: ["GET", "/2020-05-31/cache-policy/{Id}/config", 200],
  },
  () => GetCachePolicyConfigRequest,
  () => GetCachePolicyConfigResult
);
export var ListCachePolicies = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/2020-05-31/cache-policy", 200],
  },
  () => ListCachePoliciesRequest,
  () => ListCachePoliciesResult
);
export var ListDistributionsByCachePolicyId = op(
  n0,
  _LDBCPI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}", 200],
  },
  () => ListDistributionsByCachePolicyIdRequest,
  () => ListDistributionsByCachePolicyIdResult
);
export var UpdateCachePolicy = op(
  n0,
  _UCP,
  {
    [_h]: ["PUT", "/2020-05-31/cache-policy/{Id}", 200],
  },
  () => UpdateCachePolicyRequest,
  () => UpdateCachePolicyResult
);
