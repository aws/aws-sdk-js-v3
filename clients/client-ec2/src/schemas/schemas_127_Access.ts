// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _DR,
  _DVAE,
  _DVAER,
  _DVAERe,
  _eQN,
  _GVAEP,
  _GVAEPR,
  _GVAEPRe,
  _GVAET,
  _GVAETR,
  _GVAETRe,
  _it,
  _MR,
  _MVAEP,
  _MVAEPR,
  _MVAEPRo,
  _NTe,
  _nTe,
  _PDo,
  _pDo,
  _PE,
  _pE,
  _SS,
  _sSs,
  _VAE,
  _vAE,
  _VAEI,
  _vAEI,
  _VAET,
  _VAETD,
  _vAETD,
  _VAETe,
  _VAETIA,
  _vAETIA,
  _VAETL,
  _vAETS,
  _xN,
  n0,
  VerifiedAccessSseSpecificationResponse,
} from "./schemas_0";
import { VerifiedAccessEndpoint } from "./schemas_44_Verified";
import { VerifiedAccessSseSpecificationRequest } from "./schemas_222_Access";

/* eslint no-var: 0 */

export var DeleteVerifiedAccessEndpointRequest = struct(n0, _DVAER, 0, [_VAEI, _CT, _DR], [0, [0, 4], 2]);
export var DeleteVerifiedAccessEndpointResult = struct(
  n0,
  _DVAERe,
  0,
  [_VAE],
  [
    [
      () => VerifiedAccessEndpoint,
      {
        [_eQN]: `VerifiedAccessEndpoint`,
        [_xN]: _vAE,
      },
    ],
  ]
);
export var GetVerifiedAccessEndpointPolicyRequest = struct(n0, _GVAEPR, 0, [_VAEI, _DR], [0, 2]);
export var GetVerifiedAccessEndpointPolicyResult = struct(
  n0,
  _GVAEPRe,
  0,
  [_PE, _PDo],
  [
    [
      2,
      {
        [_eQN]: `PolicyEnabled`,
        [_xN]: _pE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PolicyDocument`,
        [_xN]: _pDo,
      },
    ],
  ]
);
export var GetVerifiedAccessEndpointTargetsRequest = struct(
  n0,
  _GVAETR,
  0,
  [_VAEI, _MR, _NTe, _DR],
  [
    [
      0,
      {
        [_xN]: _VAEI,
      },
    ],
    1,
    0,
    2,
  ]
);
export var GetVerifiedAccessEndpointTargetsResult = struct(
  n0,
  _GVAETRe,
  0,
  [_VAET, _NTe],
  [
    [
      () => VerifiedAccessEndpointTargetList,
      {
        [_eQN]: `VerifiedAccessEndpointTargetSet`,
        [_xN]: _vAETS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var ModifyVerifiedAccessEndpointPolicyRequest = struct(
  n0,
  _MVAEPR,
  0,
  [_VAEI, _PE, _PDo, _CT, _DR, _SS],
  [0, 2, 0, [0, 4], 2, () => VerifiedAccessSseSpecificationRequest]
);
export var ModifyVerifiedAccessEndpointPolicyResult = struct(
  n0,
  _MVAEPRo,
  0,
  [_PE, _PDo, _SS],
  [
    [
      2,
      {
        [_eQN]: `PolicyEnabled`,
        [_xN]: _pE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PolicyDocument`,
        [_xN]: _pDo,
      },
    ],
    [
      () => VerifiedAccessSseSpecificationResponse,
      {
        [_eQN]: `SseSpecification`,
        [_xN]: _sSs,
      },
    ],
  ]
);
export var VerifiedAccessEndpointTarget = struct(
  n0,
  _VAETe,
  0,
  [_VAEI, _VAETIA, _VAETD],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessEndpointId`,
        [_xN]: _vAEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessEndpointTargetIpAddress`,
        [_xN]: _vAETIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessEndpointTargetDns`,
        [_xN]: _vAETD,
      },
    ],
  ]
);
export var VerifiedAccessEndpointTargetList = list(n0, _VAETL, 0, [
  () => VerifiedAccessEndpointTarget,
  {
    [_xN]: _it,
  },
]);
export var DeleteVerifiedAccessEndpoint = op(
  n0,
  _DVAE,
  0,
  () => DeleteVerifiedAccessEndpointRequest,
  () => DeleteVerifiedAccessEndpointResult
);
export var GetVerifiedAccessEndpointPolicy = op(
  n0,
  _GVAEP,
  0,
  () => GetVerifiedAccessEndpointPolicyRequest,
  () => GetVerifiedAccessEndpointPolicyResult
);
export var GetVerifiedAccessEndpointTargets = op(
  n0,
  _GVAET,
  0,
  () => GetVerifiedAccessEndpointTargetsRequest,
  () => GetVerifiedAccessEndpointTargetsResult
);
export var ModifyVerifiedAccessEndpointPolicy = op(
  n0,
  _MVAEP,
  0,
  () => ModifyVerifiedAccessEndpointPolicyRequest,
  () => ModifyVerifiedAccessEndpointPolicyResult
);
