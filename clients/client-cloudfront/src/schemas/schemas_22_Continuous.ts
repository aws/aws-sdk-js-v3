// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ContinuousDeploymentPolicyInUse as __ContinuousDeploymentPolicyInUse,
  NoSuchContinuousDeploymentPolicy as __NoSuchContinuousDeploymentPolicy,
} from "../models/index";
import {
  _c,
  _CDP,
  _CDPC,
  _CDPIU,
  _CDPL,
  _CDPS,
  _CDPSL,
  _DCDP,
  _DCDPR,
  _e,
  _ET,
  _GCDP,
  _GCDPC,
  _GCDPCR,
  _GCDPCRe,
  _GCDPR,
  _GCDPRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _IM,
  _IM_,
  _LCDP,
  _LCDPR,
  _LCDPRi,
  _M,
  _Ma,
  _MI,
  _NM,
  _NSCDP,
  _Q,
  _UCDP,
  _UCDPR,
  _UCDPRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { ContinuousDeploymentPolicy, ContinuousDeploymentPolicyConfig } from "./schemas_16_ContinuousDeployment";

/* eslint no-var: 0 */

export var ContinuousDeploymentPolicyInUse = error(
  n0,
  _CDPIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ContinuousDeploymentPolicyInUse
);
export var ContinuousDeploymentPolicyList = struct(
  n0,
  _CDPL,
  0,
  [_NM, _MI, _Q, _I],
  [0, 1, 1, [() => ContinuousDeploymentPolicySummaryList, 0]]
);
export var ContinuousDeploymentPolicySummary = struct(n0, _CDPS, 0, [_CDP], [[() => ContinuousDeploymentPolicy, 0]]);
export var DeleteContinuousDeploymentPolicyRequest = struct(
  n0,
  _DCDPR,
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
export var GetContinuousDeploymentPolicyConfigRequest = struct(n0, _GCDPCR, 0, [_Id], [[0, 1]]);
export var GetContinuousDeploymentPolicyConfigResult = struct(
  n0,
  _GCDPCRe,
  0,
  [_CDPC, _ET],
  [
    [() => ContinuousDeploymentPolicyConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetContinuousDeploymentPolicyRequest = struct(n0, _GCDPR, 0, [_Id], [[0, 1]]);
export var GetContinuousDeploymentPolicyResult = struct(
  n0,
  _GCDPRe,
  0,
  [_CDP, _ET],
  [
    [() => ContinuousDeploymentPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListContinuousDeploymentPoliciesRequest = struct(
  n0,
  _LCDPR,
  0,
  [_Ma, _MI],
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
  ]
);
export var ListContinuousDeploymentPoliciesResult = struct(
  n0,
  _LCDPRi,
  0,
  [_CDPL],
  [[() => ContinuousDeploymentPolicyList, 16]]
);
export var NoSuchContinuousDeploymentPolicy = error(
  n0,
  _NSCDP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchContinuousDeploymentPolicy
);
export var UpdateContinuousDeploymentPolicyRequest = struct(
  n0,
  _UCDPR,
  0,
  [_CDPC, _Id, _IM],
  [
    [
      () => ContinuousDeploymentPolicyConfig,
      {
        [_xN]: _CDPC,
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
export var UpdateContinuousDeploymentPolicyResult = struct(
  n0,
  _UCDPRp,
  0,
  [_CDP, _ET],
  [
    [() => ContinuousDeploymentPolicy, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ContinuousDeploymentPolicySummaryList = list(n0, _CDPSL, 0, [
  () => ContinuousDeploymentPolicySummary,
  {
    [_xN]: _CDPS,
  },
]);
export var DeleteContinuousDeploymentPolicy = op(
  n0,
  _DCDP,
  {
    [_h]: ["DELETE", "/2020-05-31/continuous-deployment-policy/{Id}", 204],
  },
  () => DeleteContinuousDeploymentPolicyRequest,
  () => Unit
);
export var GetContinuousDeploymentPolicy = op(
  n0,
  _GCDP,
  {
    [_h]: ["GET", "/2020-05-31/continuous-deployment-policy/{Id}", 200],
  },
  () => GetContinuousDeploymentPolicyRequest,
  () => GetContinuousDeploymentPolicyResult
);
export var GetContinuousDeploymentPolicyConfig = op(
  n0,
  _GCDPC,
  {
    [_h]: ["GET", "/2020-05-31/continuous-deployment-policy/{Id}/config", 200],
  },
  () => GetContinuousDeploymentPolicyConfigRequest,
  () => GetContinuousDeploymentPolicyConfigResult
);
export var ListContinuousDeploymentPolicies = op(
  n0,
  _LCDP,
  {
    [_h]: ["GET", "/2020-05-31/continuous-deployment-policy", 200],
  },
  () => ListContinuousDeploymentPoliciesRequest,
  () => ListContinuousDeploymentPoliciesResult
);
export var UpdateContinuousDeploymentPolicy = op(
  n0,
  _UCDP,
  {
    [_h]: ["PUT", "/2020-05-31/continuous-deployment-policy/{Id}", 200],
  },
  () => UpdateContinuousDeploymentPolicyRequest,
  () => UpdateContinuousDeploymentPolicyResult
);
