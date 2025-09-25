// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAR,
  _CAr,
  _CDS,
  _CDSR,
  _D,
  _DDIM,
  _FBTIM,
  _GF,
  _GT,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _N,
  _RAe,
  _RT,
  _RTe,
  _Ta,
  _TK,
  _tK,
  _TR,
  _TRR,
  _UR,
  _URR,
  n0,
  Unit,
} from "./schemas_0";
import { DeploymentStrategy } from "./schemas_3_Deployment";
import { Application } from "./schemas_10_Application";

/* eslint no-var: 0 */

export var CreateApplicationRequest = struct(n0, _CAR, 0, [_N, _D, _Ta], [0, 0, 128 | 0]);
export var CreateDeploymentStrategyRequest = struct(
  n0,
  _CDSR,
  0,
  [_N, _D, _DDIM, _FBTIM, _GF, _GT, _RT, _Ta],
  [0, 0, 1, 1, 1, 0, 0, 128 | 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ResourceTags = struct(n0, _RTe, 0, [_Ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _Ta], [[0, 1], 128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateApplication = op(
  n0,
  _CAr,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => Application
);
export var CreateDeploymentStrategy = op(
  n0,
  _CDS,
  {
    [_h]: ["POST", "/deploymentstrategies", 201],
  },
  () => CreateDeploymentStrategyRequest,
  () => DeploymentStrategy
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ResourceTags
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
