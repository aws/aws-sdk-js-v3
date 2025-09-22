// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NoSuchOriginRequestPolicy as __NoSuchOriginRequestPolicy,
  OriginRequestPolicyInUse as __OriginRequestPolicyInUse,
} from "../models/index";
import {
  _c,
  _DIL,
  _DORP,
  _DORPR,
  _e,
  _ET,
  _GORP,
  _GORPC,
  _GORPCR,
  _GORPCRe,
  _GORPR,
  _GORPRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _IM,
  _IM_,
  _LDBORPI,
  _LDBORPIR,
  _LDBORPIRi,
  _LORP,
  _LORPR,
  _LORPRi,
  _M,
  _Ma,
  _MI,
  _NM,
  _NSORP,
  _ORP,
  _ORPC,
  _ORPI,
  _ORPIU,
  _ORPL,
  _ORPS,
  _ORPSL,
  _Q,
  _T,
  _UORP,
  _UORPR,
  _UORPRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { OriginRequestPolicy, OriginRequestPolicyConfig } from "./schemas_38_Policy";
import { DistributionIdList } from "./schemas_39_ListDistributions";

/* eslint no-var: 0 */

export var DeleteOriginRequestPolicyRequest = struct(
  n0,
  _DORPR,
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
export var GetOriginRequestPolicyConfigRequest = struct(n0, _GORPCR, 0, [_Id], [[0, 1]]);
export var GetOriginRequestPolicyConfigResult = struct(
  n0,
  _GORPCRe,
  0,
  [_ORPC, _ET],
  [
    [() => OriginRequestPolicyConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetOriginRequestPolicyRequest = struct(n0, _GORPR, 0, [_Id], [[0, 1]]);
export var GetOriginRequestPolicyResult = struct(
  n0,
  _GORPRe,
  0,
  [_ORP, _ET],
  [
    [() => OriginRequestPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListDistributionsByOriginRequestPolicyIdRequest = struct(
  n0,
  _LDBORPIR,
  0,
  [_Ma, _MI, _ORPI],
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
export var ListDistributionsByOriginRequestPolicyIdResult = struct(
  n0,
  _LDBORPIRi,
  0,
  [_DIL],
  [[() => DistributionIdList, 16]]
);
export var ListOriginRequestPoliciesRequest = struct(
  n0,
  _LORPR,
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
export var ListOriginRequestPoliciesResult = struct(n0, _LORPRi, 0, [_ORPL], [[() => OriginRequestPolicyList, 16]]);
export var NoSuchOriginRequestPolicy = error(
  n0,
  _NSORP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchOriginRequestPolicy
);
export var OriginRequestPolicyInUse = error(
  n0,
  _ORPIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OriginRequestPolicyInUse
);
export var OriginRequestPolicyList = struct(
  n0,
  _ORPL,
  0,
  [_NM, _MI, _Q, _I],
  [0, 1, 1, [() => OriginRequestPolicySummaryList, 0]]
);
export var OriginRequestPolicySummary = struct(n0, _ORPS, 0, [_T, _ORP], [0, [() => OriginRequestPolicy, 0]]);
export var UpdateOriginRequestPolicyRequest = struct(
  n0,
  _UORPR,
  0,
  [_ORPC, _Id, _IM],
  [
    [
      () => OriginRequestPolicyConfig,
      {
        [_xN]: _ORPC,
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
export var UpdateOriginRequestPolicyResult = struct(
  n0,
  _UORPRp,
  0,
  [_ORP, _ET],
  [
    [() => OriginRequestPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var OriginRequestPolicySummaryList = list(n0, _ORPSL, 0, [
  () => OriginRequestPolicySummary,
  {
    [_xN]: _ORPS,
  },
]);
export var DeleteOriginRequestPolicy = op(
  n0,
  _DORP,
  {
    [_h]: ["DELETE", "/2020-05-31/origin-request-policy/{Id}", 204],
  },
  () => DeleteOriginRequestPolicyRequest,
  () => Unit
);
export var GetOriginRequestPolicy = op(
  n0,
  _GORP,
  {
    [_h]: ["GET", "/2020-05-31/origin-request-policy/{Id}", 200],
  },
  () => GetOriginRequestPolicyRequest,
  () => GetOriginRequestPolicyResult
);
export var GetOriginRequestPolicyConfig = op(
  n0,
  _GORPC,
  {
    [_h]: ["GET", "/2020-05-31/origin-request-policy/{Id}/config", 200],
  },
  () => GetOriginRequestPolicyConfigRequest,
  () => GetOriginRequestPolicyConfigResult
);
export var ListDistributionsByOriginRequestPolicyId = op(
  n0,
  _LDBORPI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}", 200],
  },
  () => ListDistributionsByOriginRequestPolicyIdRequest,
  () => ListDistributionsByOriginRequestPolicyIdResult
);
export var ListOriginRequestPolicies = op(
  n0,
  _LORP,
  {
    [_h]: ["GET", "/2020-05-31/origin-request-policy", 200],
  },
  () => ListOriginRequestPoliciesRequest,
  () => ListOriginRequestPoliciesResult
);
export var UpdateOriginRequestPolicy = op(
  n0,
  _UORP,
  {
    [_h]: ["PUT", "/2020-05-31/origin-request-policy/{Id}", 200],
  },
  () => UpdateOriginRequestPolicyRequest,
  () => UpdateOriginRequestPolicyResult
);
