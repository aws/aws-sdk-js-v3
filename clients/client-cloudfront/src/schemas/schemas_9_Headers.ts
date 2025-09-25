// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NoSuchResponseHeadersPolicy as __NoSuchResponseHeadersPolicy,
  ResponseHeadersPolicyInUse as __ResponseHeadersPolicyInUse,
} from "../models/index";
import {
  _c,
  _DIL,
  _DRHP,
  _DRHPR,
  _e,
  _ET,
  _GRHP,
  _GRHPC,
  _GRHPCR,
  _GRHPCRe,
  _GRHPR,
  _GRHPRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _IM,
  _IM_,
  _LDBRHPI,
  _LDBRHPIR,
  _LDBRHPIRi,
  _LRHP,
  _LRHPR,
  _LRHPRi,
  _M,
  _Ma,
  _MI,
  _NM,
  _NSRHP,
  _Q,
  _RHP,
  _RHPC,
  _RHPI,
  _RHPIU,
  _RHPL,
  _RHPS,
  _RHPSL,
  _T,
  _URHP,
  _URHPR,
  _URHPRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { ResponseHeadersPolicy, ResponseHeadersPolicyConfig } from "./schemas_6_Response";
import { DistributionIdList } from "./schemas_39_ListDistributions";

/* eslint no-var: 0 */

export var DeleteResponseHeadersPolicyRequest = struct(
  n0,
  _DRHPR,
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
export var GetResponseHeadersPolicyConfigRequest = struct(n0, _GRHPCR, 0, [_Id], [[0, 1]]);
export var GetResponseHeadersPolicyConfigResult = struct(
  n0,
  _GRHPCRe,
  0,
  [_RHPC, _ET],
  [
    [() => ResponseHeadersPolicyConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetResponseHeadersPolicyRequest = struct(n0, _GRHPR, 0, [_Id], [[0, 1]]);
export var GetResponseHeadersPolicyResult = struct(
  n0,
  _GRHPRe,
  0,
  [_RHP, _ET],
  [
    [() => ResponseHeadersPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListDistributionsByResponseHeadersPolicyIdRequest = struct(
  n0,
  _LDBRHPIR,
  0,
  [_Ma, _MI, _RHPI],
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
export var ListDistributionsByResponseHeadersPolicyIdResult = struct(
  n0,
  _LDBRHPIRi,
  0,
  [_DIL],
  [[() => DistributionIdList, 16]]
);
export var ListResponseHeadersPoliciesRequest = struct(
  n0,
  _LRHPR,
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
export var ListResponseHeadersPoliciesResult = struct(n0, _LRHPRi, 0, [_RHPL], [[() => ResponseHeadersPolicyList, 16]]);
export var NoSuchResponseHeadersPolicy = error(
  n0,
  _NSRHP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchResponseHeadersPolicy
);
export var ResponseHeadersPolicyInUse = error(
  n0,
  _RHPIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResponseHeadersPolicyInUse
);
export var ResponseHeadersPolicyList = struct(
  n0,
  _RHPL,
  0,
  [_NM, _MI, _Q, _I],
  [0, 1, 1, [() => ResponseHeadersPolicySummaryList, 0]]
);
export var ResponseHeadersPolicySummary = struct(n0, _RHPS, 0, [_T, _RHP], [0, [() => ResponseHeadersPolicy, 0]]);
export var UpdateResponseHeadersPolicyRequest = struct(
  n0,
  _URHPR,
  0,
  [_RHPC, _Id, _IM],
  [
    [
      () => ResponseHeadersPolicyConfig,
      {
        [_xN]: _RHPC,
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
export var UpdateResponseHeadersPolicyResult = struct(
  n0,
  _URHPRp,
  0,
  [_RHP, _ET],
  [
    [() => ResponseHeadersPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ResponseHeadersPolicySummaryList = list(n0, _RHPSL, 0, [
  () => ResponseHeadersPolicySummary,
  {
    [_xN]: _RHPS,
  },
]);
export var DeleteResponseHeadersPolicy = op(
  n0,
  _DRHP,
  {
    [_h]: ["DELETE", "/2020-05-31/response-headers-policy/{Id}", 204],
  },
  () => DeleteResponseHeadersPolicyRequest,
  () => Unit
);
export var GetResponseHeadersPolicy = op(
  n0,
  _GRHP,
  {
    [_h]: ["GET", "/2020-05-31/response-headers-policy/{Id}", 200],
  },
  () => GetResponseHeadersPolicyRequest,
  () => GetResponseHeadersPolicyResult
);
export var GetResponseHeadersPolicyConfig = op(
  n0,
  _GRHPC,
  {
    [_h]: ["GET", "/2020-05-31/response-headers-policy/{Id}/config", 200],
  },
  () => GetResponseHeadersPolicyConfigRequest,
  () => GetResponseHeadersPolicyConfigResult
);
export var ListDistributionsByResponseHeadersPolicyId = op(
  n0,
  _LDBRHPI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}", 200],
  },
  () => ListDistributionsByResponseHeadersPolicyIdRequest,
  () => ListDistributionsByResponseHeadersPolicyIdResult
);
export var ListResponseHeadersPolicies = op(
  n0,
  _LRHP,
  {
    [_h]: ["GET", "/2020-05-31/response-headers-policy", 200],
  },
  () => ListResponseHeadersPoliciesRequest,
  () => ListResponseHeadersPoliciesResult
);
export var UpdateResponseHeadersPolicy = op(
  n0,
  _URHP,
  {
    [_h]: ["PUT", "/2020-05-31/response-headers-policy/{Id}", 200],
  },
  () => UpdateResponseHeadersPolicyRequest,
  () => UpdateResponseHeadersPolicyResult
);
