// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AA,
  _AGA,
  _AGI,
  _AGIA,
  _AGII,
  _AGLA,
  _AGLC,
  _AGLI,
  _AI,
  _AKI,
  _CA,
  _CAG,
  _CAGLR,
  _CAGLr,
  _CAGLRr,
  _CAGR,
  _CAGRr,
  _Cr,
  _DS,
  _dS,
  _E,
  _G,
  _GAG,
  _GAGIFP,
  _GAGIFPR,
  _GAGIFPRe,
  _GAGL,
  _GAGLR,
  _GAGLRe,
  _GAGR,
  _GAGRe,
  _GDA,
  _GDAR,
  _GDARe,
  _GI,
  _GS,
  _GT,
  _h,
  _hCR,
  _hH,
  _hL,
  _hQ,
  _IAMRA,
  _LS,
  _MGT,
  _P,
  _p,
  _pr,
  _Pri,
  _s,
  _SAK,
  _SP,
  _SPT,
  _SSP,
  _ST,
  _T,
  _t,
  _Ta,
  _TT,
  _tT,
  _UAGL,
  _UAGLR,
  _UAGLRp,
  _xaai,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_9_Create";

/* eslint no-var: 0 */

export var AccessKeyId = sim(n0, _AKI, 0, 8);
export var SecretAccessKey = sim(n0, _SAK, 0, 8);
export var SessionToken = sim(n0, _ST, 0, 8);
export var AccessGrantsLocationConfiguration = struct(n0, _AGLC, 0, [_SSP], [0]);
export var CreateAccessGrantRequest = struct(
  n0,
  _CAGR,
  0,
  [_AI, _AGLI, _AGLC, _G, _P, _AA, _SPT, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    0,
    () => AccessGrantsLocationConfiguration,
    () => Grantee,
    0,
    0,
    0,
    [() => TagList, 0],
  ]
);
export var CreateAccessGrantResult = struct(
  n0,
  _CAGRr,
  0,
  [_CA, _AGI, _AGA, _G, _AGLI, _AGLC, _P, _AA, _GS],
  [4, 0, 0, () => Grantee, 0, () => AccessGrantsLocationConfiguration, 0, 0, 0]
);
export var CreateAccessGrantsLocationRequest = struct(
  n0,
  _CAGLR,
  0,
  [_AI, _LS, _IAMRA, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    0,
    0,
    [() => TagList, 0],
  ]
);
export var CreateAccessGrantsLocationResult = struct(n0, _CAGLRr, 0, [_CA, _AGLI, _AGLA, _LS, _IAMRA], [4, 0, 0, 0, 0]);
export var Credentials = struct(
  n0,
  _Cr,
  8,
  [_AKI, _SAK, _ST, _E],
  [[() => AccessKeyId, 0], [() => SecretAccessKey, 0], [() => SessionToken, 0], 4]
);
export var GetAccessGrantRequest = struct(
  n0,
  _GAGR,
  0,
  [_AI, _AGI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessGrantResult = struct(
  n0,
  _GAGRe,
  0,
  [_CA, _AGI, _AGA, _G, _P, _AGLI, _AGLC, _GS, _AA],
  [4, 0, 0, () => Grantee, 0, 0, () => AccessGrantsLocationConfiguration, 0, 0]
);
export var GetAccessGrantsInstanceForPrefixRequest = struct(
  n0,
  _GAGIFPR,
  0,
  [_AI, _SP],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var GetAccessGrantsInstanceForPrefixResult = struct(n0, _GAGIFPRe, 0, [_AGIA, _AGII], [0, 0]);
export var GetAccessGrantsLocationRequest = struct(
  n0,
  _GAGLR,
  0,
  [_AI, _AGLI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessGrantsLocationResult = struct(n0, _GAGLRe, 0, [_CA, _AGLI, _AGLA, _LS, _IAMRA], [4, 0, 0, 0, 0]);
export var GetDataAccessRequest = struct(
  n0,
  _GDAR,
  0,
  [_AI, _Ta, _P, _DS, _Pri, _TT],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _dS,
      },
    ],
    [
      0,
      {
        [_hQ]: _pr,
      },
    ],
    [
      0,
      {
        [_hQ]: _tT,
      },
    ],
  ]
);
export var GetDataAccessResult = struct(n0, _GDARe, 0, [_Cr, _MGT, _G], [[() => Credentials, 0], 0, () => Grantee]);
export var Grantee = struct(n0, _G, 0, [_GT, _GI], [0, 0]);
export var UpdateAccessGrantsLocationRequest = struct(
  n0,
  _UAGLR,
  0,
  [_AI, _AGLI, _IAMRA],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    0,
  ]
);
export var UpdateAccessGrantsLocationResult = struct(n0, _UAGLRp, 0, [_CA, _AGLI, _AGLA, _LS, _IAMRA], [4, 0, 0, 0, 0]);
export var CreateAccessGrant = op(
  n0,
  _CAG,
  {
    [_h]: ["POST", "/v20180820/accessgrantsinstance/grant", 200],
    [_hCR]: 1,
  },
  () => CreateAccessGrantRequest,
  () => CreateAccessGrantResult
);
export var CreateAccessGrantsLocation = op(
  n0,
  _CAGLr,
  {
    [_h]: ["POST", "/v20180820/accessgrantsinstance/location", 200],
    [_hCR]: 1,
  },
  () => CreateAccessGrantsLocationRequest,
  () => CreateAccessGrantsLocationResult
);
export var GetAccessGrant = op(
  n0,
  _GAG,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/grant/{AccessGrantId}", 200],
    [_hCR]: 1,
  },
  () => GetAccessGrantRequest,
  () => GetAccessGrantResult
);
export var GetAccessGrantsInstanceForPrefix = op(
  n0,
  _GAGIFP,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/prefix", 200],
    [_hCR]: 1,
  },
  () => GetAccessGrantsInstanceForPrefixRequest,
  () => GetAccessGrantsInstanceForPrefixResult
);
export var GetAccessGrantsLocation = op(
  n0,
  _GAGL,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", 200],
    [_hCR]: 1,
  },
  () => GetAccessGrantsLocationRequest,
  () => GetAccessGrantsLocationResult
);
export var GetDataAccess = op(
  n0,
  _GDA,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/dataaccess", 200],
    [_hCR]: 1,
  },
  () => GetDataAccessRequest,
  () => GetDataAccessResult
);
export var UpdateAccessGrantsLocation = op(
  n0,
  _UAGL,
  {
    [_h]: ["PUT", "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", 200],
    [_hCR]: 1,
  },
  () => UpdateAccessGrantsLocationRequest,
  () => UpdateAccessGrantsLocationResult
);
