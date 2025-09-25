// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _aD,
  _AI,
  _CD,
  _cD,
  _CDR,
  _CDr,
  _CDRr,
  _D,
  _d,
  _De,
  _DI,
  _dI,
  _DS,
  _dS,
  _DSM,
  _dSM,
  _GD,
  _GDe,
  _GDR,
  _GDRe,
  _GDRet,
  _GDRete,
  _hQ,
  _ht,
  _I,
  _i,
  _jN,
  _lOD,
  _MR,
  _mR,
  _NT,
  _nT,
  _SN,
  _sN,
  _UD,
  _UDR,
  _UDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDeploymentRequest = struct(
  n0,
  _CDR,
  0,
  [_AI, _D, _SN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
  ]
);
export var CreateDeploymentResponse = struct(
  n0,
  _CDRr,
  0,
  [_AD, _CD, _DI, _DS, _DSM, _D],
  [
    [
      2,
      {
        [_jN]: _aD,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      0,
      {
        [_jN]: _dSM,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var Deployment = struct(
  n0,
  _De,
  0,
  [_AD, _CD, _DI, _DS, _DSM, _D],
  [
    [
      2,
      {
        [_jN]: _aD,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      0,
      {
        [_jN]: _dSM,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var GetDeploymentRequest = struct(
  n0,
  _GDR,
  0,
  [_AI, _DI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDeploymentResponse = struct(
  n0,
  _GDRe,
  0,
  [_AD, _CD, _DI, _DS, _DSM, _D],
  [
    [
      2,
      {
        [_jN]: _aD,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      0,
      {
        [_jN]: _dSM,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var GetDeploymentsRequest = struct(
  n0,
  _GDRet,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetDeploymentsResponse = struct(
  n0,
  _GDRete,
  0,
  [_I, _NT],
  [
    [
      () => __listOfDeployment,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var UpdateDeploymentRequest = struct(
  n0,
  _UDR,
  0,
  [_AI, _DI, _D],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var UpdateDeploymentResponse = struct(
  n0,
  _UDRp,
  0,
  [_AD, _CD, _DI, _DS, _DSM, _D],
  [
    [
      2,
      {
        [_jN]: _aD,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      0,
      {
        [_jN]: _dSM,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var __listOfDeployment = list(n0, _lOD, 0, [() => Deployment, 0]);
export var CreateDeployment = op(
  n0,
  _CDr,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/deployments", 201],
  },
  () => CreateDeploymentRequest,
  () => CreateDeploymentResponse
);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/deployments/{DeploymentId}", 200],
  },
  () => GetDeploymentRequest,
  () => GetDeploymentResponse
);
export var GetDeployments = op(
  n0,
  _GDe,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/deployments", 200],
  },
  () => GetDeploymentsRequest,
  () => GetDeploymentsResponse
);
export var UpdateDeployment = op(
  n0,
  _UD,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/deployments/{DeploymentId}", 200],
  },
  () => UpdateDeploymentRequest,
  () => UpdateDeploymentResponse
);
