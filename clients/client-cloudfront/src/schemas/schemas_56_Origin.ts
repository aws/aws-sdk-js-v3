// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CloudFrontOriginAccessIdentityInUse as __CloudFrontOriginAccessIdentityInUse,
  NoSuchCloudFrontOriginAccessIdentity as __NoSuchCloudFrontOriginAccessIdentity,
} from "../models/index";
import { _c, _CFOAIIU, _DCFOAI, _DCFOAIR, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, _NSCFOAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFrontOriginAccessIdentityInUse = error(
  n0,
  _CFOAIIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CloudFrontOriginAccessIdentityInUse
);
export var DeleteCloudFrontOriginAccessIdentityRequest = struct(
  n0,
  _DCFOAIR,
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
export var NoSuchCloudFrontOriginAccessIdentity = error(
  n0,
  _NSCFOAI,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchCloudFrontOriginAccessIdentity
);
export var DeleteCloudFrontOriginAccessIdentity = op(
  n0,
  _DCFOAI,
  {
    [_h]: ["DELETE", "/2020-05-31/origin-access-identity/cloudfront/{Id}", 204],
  },
  () => DeleteCloudFrontOriginAccessIdentityRequest,
  () => Unit
);
