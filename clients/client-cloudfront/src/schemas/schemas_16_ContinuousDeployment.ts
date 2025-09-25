// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ContinuousDeploymentPolicyAlreadyExists as __ContinuousDeploymentPolicyAlreadyExists,
  TooManyContinuousDeploymentPolicies as __TooManyContinuousDeploymentPolicies,
} from "../models/index";
import {
  _c,
  _CCDP,
  _CCDPR,
  _CCDPRr,
  _CDP,
  _CDPAE,
  _CDPC,
  _CDSHC,
  _CDSWC,
  _DNn,
  _E,
  _e,
  _ET,
  _h,
  _He,
  _hE,
  _hH,
  _hP,
  _I,
  _Id,
  _ITTL,
  _L,
  _LMT,
  _M,
  _MTTLax,
  _Q,
  _SDDN,
  _SDDNL,
  _SHCi,
  _SSC,
  _SWC,
  _T,
  _TC,
  _TMCDP,
  _V,
  _W,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContinuousDeploymentPolicy = struct(
  n0,
  _CDP,
  0,
  [_Id, _LMT, _CDPC],
  [0, 4, [() => ContinuousDeploymentPolicyConfig, 0]]
);
export var ContinuousDeploymentPolicyAlreadyExists = error(
  n0,
  _CDPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ContinuousDeploymentPolicyAlreadyExists
);
export var ContinuousDeploymentPolicyConfig = struct(
  n0,
  _CDPC,
  0,
  [_SDDN, _E, _TC],
  [[() => StagingDistributionDnsNames, 0], 2, () => TrafficConfig]
);
export var ContinuousDeploymentSingleHeaderConfig = struct(n0, _CDSHC, 0, [_He, _V], [0, 0]);
export var ContinuousDeploymentSingleWeightConfig = struct(
  n0,
  _CDSWC,
  0,
  [_W, _SSC],
  [1, () => SessionStickinessConfig]
);
export var CreateContinuousDeploymentPolicyRequest = struct(
  n0,
  _CCDPR,
  0,
  [_CDPC],
  [
    [
      () => ContinuousDeploymentPolicyConfig,
      {
        [_xN]: _CDPC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateContinuousDeploymentPolicyResult = struct(
  n0,
  _CCDPRr,
  0,
  [_CDP, _L, _ET],
  [
    [() => ContinuousDeploymentPolicy, 16],
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
export var SessionStickinessConfig = struct(n0, _SSC, 0, [_ITTL, _MTTLax], [1, 1]);
export var StagingDistributionDnsNames = struct(n0, _SDDN, 0, [_Q, _I], [1, [() => StagingDistributionDnsNameList, 0]]);
export var TooManyContinuousDeploymentPolicies = error(
  n0,
  _TMCDP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyContinuousDeploymentPolicies
);
export var TrafficConfig = struct(
  n0,
  _TC,
  0,
  [_SWC, _SHCi, _T],
  [() => ContinuousDeploymentSingleWeightConfig, () => ContinuousDeploymentSingleHeaderConfig, 0]
);
export var StagingDistributionDnsNameList = list(n0, _SDDNL, 0, [
  0,
  {
    [_xN]: _DNn,
  },
]);
export var CreateContinuousDeploymentPolicy = op(
  n0,
  _CCDP,
  {
    [_h]: ["POST", "/2020-05-31/continuous-deployment-policy", 201],
  },
  () => CreateContinuousDeploymentPolicyRequest,
  () => CreateContinuousDeploymentPolicyResult
);
