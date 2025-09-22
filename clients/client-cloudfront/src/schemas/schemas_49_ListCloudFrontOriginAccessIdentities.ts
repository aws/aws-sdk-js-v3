// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CFOAIL,
  _CFOAIS,
  _CFOAISL,
  _Co,
  _h,
  _hQ,
  _I,
  _Id,
  _IT,
  _LCFOAI,
  _LCFOAIR,
  _LCFOAIRi,
  _Ma,
  _MI,
  _NM,
  _Q,
  _SCUI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFrontOriginAccessIdentityList = struct(
  n0,
  _CFOAIL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => CloudFrontOriginAccessIdentitySummaryList, 0]]
);
export var CloudFrontOriginAccessIdentitySummary = struct(n0, _CFOAIS, 0, [_Id, _SCUI, _Co], [0, 0, 0]);
export var ListCloudFrontOriginAccessIdentitiesRequest = struct(
  n0,
  _LCFOAIR,
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
export var ListCloudFrontOriginAccessIdentitiesResult = struct(
  n0,
  _LCFOAIRi,
  0,
  [_CFOAIL],
  [[() => CloudFrontOriginAccessIdentityList, 16]]
);
export var CloudFrontOriginAccessIdentitySummaryList = list(n0, _CFOAISL, 0, [
  () => CloudFrontOriginAccessIdentitySummary,
  {
    [_xN]: _CFOAIS,
  },
]);
export var ListCloudFrontOriginAccessIdentities = op(
  n0,
  _LCFOAI,
  {
    [_h]: ["GET", "/2020-05-31/origin-access-identity/cloudfront", 200],
  },
  () => ListCloudFrontOriginAccessIdentitiesRequest,
  () => ListCloudFrontOriginAccessIdentitiesResult
);
