// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ServiceUnavailableException as __ServiceUnavailableException } from "../models/index";
import {
  _aKR,
  _aSp,
  _aTu,
  _cD,
  _D,
  _d,
  _De,
  _dI,
  _em,
  _er,
  _GD,
  _GDe,
  _GDR,
  _GDRe,
  _hE,
  _hH,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _li,
  _LOD,
  _m,
  _MOMSa,
  _MSe,
  _p,
  _pO,
  _PTMOMS,
  _RA,
  _rAI,
  _rAS,
  _se,
  _SUE,
  _UD,
  _UDR,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Deployment = struct(n0, _D, 0, [_i, _d, _cD, _aSp], [0, 0, 4, () => PathToMapOfMethodSnapshot]);
export var Deployments = struct(
  n0,
  _De,
  0,
  [_it, _p],
  [
    [
      () => ListOfDeployment,
      {
        [_jN]: _ite,
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
export var GetDeploymentRequest = struct(
  n0,
  _GDR,
  0,
  [_rAI, _dI, _em],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _em,
      },
    ],
  ]
);
export var GetDeploymentsRequest = struct(
  n0,
  _GDRe,
  0,
  [_rAI, _p, _li],
  [
    [0, 1],
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
export var MethodSnapshot = struct(n0, _MSe, 0, [_aTu, _aKR], [0, 2]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_er]: _se,
    [_hE]: 503,
  },
  [_rAS, _m],
  [
    [
      0,
      {
        [_hH]: _RA,
      },
    ],
    0,
  ],

  __ServiceUnavailableException
);
export var UpdateDeploymentRequest = struct(
  n0,
  _UDR,
  0,
  [_rAI, _dI, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfDeployment = list(n0, _LOD, 0, () => Deployment);
export var MapOfMethodSnapshot = map(n0, _MOMSa, 0, 0, () => MethodSnapshot);
export var PathToMapOfMethodSnapshot = map(n0, _PTMOMS, 0, 0, () => MapOfMethodSnapshot);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/deployments/{deploymentId}", 200],
  },
  () => GetDeploymentRequest,
  () => Deployment
);
export var GetDeployments = op(
  n0,
  _GDe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/deployments", 200],
  },
  () => GetDeploymentsRequest,
  () => Deployments
);
export var UpdateDeployment = op(
  n0,
  _UD,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/deployments/{deploymentId}", 200],
  },
  () => UpdateDeploymentRequest,
  () => Deployment
);
