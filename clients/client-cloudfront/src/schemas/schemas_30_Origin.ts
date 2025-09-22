// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CloudFrontOriginAccessIdentityAlreadyExists as __CloudFrontOriginAccessIdentityAlreadyExists,
  TooManyCloudFrontOriginAccessIdentities as __TooManyCloudFrontOriginAccessIdentities,
} from "../models/index";
import {
  _c,
  _CCFOAI,
  _CCFOAIR,
  _CCFOAIRr,
  _CFOAI,
  _CFOAIAE,
  _CFOAIC,
  _Co,
  _CR,
  _e,
  _ET,
  _GCFOAI,
  _GCFOAIC,
  _GCFOAICR,
  _GCFOAICRe,
  _GCFOAIR,
  _GCFOAIRe,
  _h,
  _hE,
  _hH,
  _hP,
  _Id,
  _IM,
  _IM_,
  _L,
  _M,
  _SCUI,
  _TMCFOAI,
  _UCFOAI,
  _UCFOAIR,
  _UCFOAIRp,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFrontOriginAccessIdentity = struct(
  n0,
  _CFOAI,
  0,
  [_Id, _SCUI, _CFOAIC],
  [0, 0, () => CloudFrontOriginAccessIdentityConfig]
);
export var CloudFrontOriginAccessIdentityAlreadyExists = error(
  n0,
  _CFOAIAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CloudFrontOriginAccessIdentityAlreadyExists
);
export var CloudFrontOriginAccessIdentityConfig = struct(n0, _CFOAIC, 0, [_CR, _Co], [0, 0]);
export var CreateCloudFrontOriginAccessIdentityRequest = struct(
  n0,
  _CCFOAIR,
  0,
  [_CFOAIC],
  [
    [
      () => CloudFrontOriginAccessIdentityConfig,
      {
        [_xN]: _CFOAIC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateCloudFrontOriginAccessIdentityResult = struct(
  n0,
  _CCFOAIRr,
  0,
  [_CFOAI, _L, _ET],
  [
    [() => CloudFrontOriginAccessIdentity, 16],
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
export var GetCloudFrontOriginAccessIdentityConfigRequest = struct(n0, _GCFOAICR, 0, [_Id], [[0, 1]]);
export var GetCloudFrontOriginAccessIdentityConfigResult = struct(
  n0,
  _GCFOAICRe,
  0,
  [_CFOAIC, _ET],
  [
    [() => CloudFrontOriginAccessIdentityConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetCloudFrontOriginAccessIdentityRequest = struct(n0, _GCFOAIR, 0, [_Id], [[0, 1]]);
export var GetCloudFrontOriginAccessIdentityResult = struct(
  n0,
  _GCFOAIRe,
  0,
  [_CFOAI, _ET],
  [
    [() => CloudFrontOriginAccessIdentity, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var TooManyCloudFrontOriginAccessIdentities = error(
  n0,
  _TMCFOAI,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCloudFrontOriginAccessIdentities
);
export var UpdateCloudFrontOriginAccessIdentityRequest = struct(
  n0,
  _UCFOAIR,
  0,
  [_CFOAIC, _Id, _IM],
  [
    [
      () => CloudFrontOriginAccessIdentityConfig,
      {
        [_xN]: _CFOAIC,
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
export var UpdateCloudFrontOriginAccessIdentityResult = struct(
  n0,
  _UCFOAIRp,
  0,
  [_CFOAI, _ET],
  [
    [() => CloudFrontOriginAccessIdentity, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateCloudFrontOriginAccessIdentity = op(
  n0,
  _CCFOAI,
  {
    [_h]: ["POST", "/2020-05-31/origin-access-identity/cloudfront", 201],
  },
  () => CreateCloudFrontOriginAccessIdentityRequest,
  () => CreateCloudFrontOriginAccessIdentityResult
);
export var GetCloudFrontOriginAccessIdentity = op(
  n0,
  _GCFOAI,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-identity/cloudfront/{Id}", 200],
  },
  () => GetCloudFrontOriginAccessIdentityRequest,
  () => GetCloudFrontOriginAccessIdentityResult
);
export var GetCloudFrontOriginAccessIdentityConfig = op(
  n0,
  _GCFOAIC,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-identity/cloudfront/{Id}/config", 200],
  },
  () => GetCloudFrontOriginAccessIdentityConfigRequest,
  () => GetCloudFrontOriginAccessIdentityConfigResult
);
export var UpdateCloudFrontOriginAccessIdentity = op(
  n0,
  _UCFOAI,
  {
    [_h]: ["PUT", "/2020-05-31/origin-access-identity/cloudfront/{Id}/config", 200],
  },
  () => UpdateCloudFrontOriginAccessIdentityRequest,
  () => UpdateCloudFrontOriginAccessIdentityResult
);
