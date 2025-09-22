// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _AK,
  _B,
  _BB,
  _bb,
  _BP,
  _bp,
  _C,
  _c,
  _CC,
  _CC_,
  _CCa,
  _ce,
  _CL,
  _cl,
  _CO,
  _co,
  _CS,
  _cs,
  _CT,
  _CT_,
  _DM,
  _e,
  _ET,
  _FL,
  _fL,
  _FN,
  _FS,
  _FUR,
  _GG,
  _GGR,
  _GGRe,
  _GJO,
  _go,
  _GS,
  _GSD,
  _GSDR,
  _GSDRe,
  _GSM,
  _GSMR,
  _GSMRe,
  _GSR,
  _GSRe,
  _GT,
  _GTR,
  _GTRe,
  _H,
  _h,
  _hE,
  _hH,
  _hQ,
  _ht,
  _ISE,
  _jN,
  _K,
  _k,
  _L,
  _l,
  _LS,
  _ls,
  _M,
  _m,
  _N,
  _n,
  _P,
  _p,
  _PB,
  _PLS,
  _po,
  _POI,
  _PS,
  _PV,
  _pv,
  _R,
  _r,
  _Re,
  _re,
  _RNFE,
  _S,
  _s,
  _SBU,
  _se,
  _SF,
  _SI,
  _SS,
  _su,
  _T,
  _TE,
  _V,
  _VE,
  _VEF,
  _VEFL,
  _W,
  _w,
  _X,
  _xagpb,
  _Y,
  _Z,
  _z,
  _Z_,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKey = sim(n0, _AK, 0, 8);
export var CompactOverlay = sim(n0, _CO, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var DistanceMeters = sim(n0, _DM, 1, 8);
export var GeoJsonOverlay = sim(n0, _GJO, 0, 8);
export var PositionListString = sim(n0, _PLS, 0, 8);
export var PositionString = sim(n0, _PS, 0, 8);
export var SensitiveFloat = sim(n0, _SF, 1, 8);
export var SensitiveInteger = sim(n0, _SI, 1, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __AccessDeniedException
);
export var GetGlyphsRequest = struct(
  n0,
  _GGR,
  0,
  [_FS, _FUR],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGlyphsResponse = struct(
  n0,
  _GGRe,
  0,
  [_B, _CT, _CCa, _ET],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
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
export var GetSpritesRequest = struct(
  n0,
  _GSR,
  0,
  [_FN, _S, _CS, _V],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSpritesResponse = struct(
  n0,
  _GSRe,
  0,
  [_B, _CT, _CCa, _ET],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
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
export var GetStaticMapRequest = struct(
  n0,
  _GSMR,
  0,
  [_BB, _BP, _C, _CS, _CO, _CL, _GJO, _H, _K, _LS, _L, _P, _PV, _POI, _R, _FN, _SBU, _S, _W, _Z],
  [
    [
      () => PositionListString,
      {
        [_hQ]: _bb,
      },
    ],
    [
      () => PositionListString,
      {
        [_hQ]: _bp,
      },
    ],
    [
      () => PositionString,
      {
        [_hQ]: _ce,
      },
    ],
    [
      0,
      {
        [_hQ]: _cs,
      },
    ],
    [
      () => CompactOverlay,
      {
        [_hQ]: _co,
      },
    ],
    [
      2,
      {
        [_hQ]: _cl,
      },
    ],
    [
      () => GeoJsonOverlay,
      {
        [_hQ]: _go,
      },
    ],
    [
      () => SensitiveInteger,
      {
        [_hQ]: _h,
      },
    ],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    [
      0,
      {
        [_hQ]: _ls,
      },
    ],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      () => SensitiveInteger,
      {
        [_hQ]: _p,
      },
    ],
    [
      () => CountryCode,
      {
        [_hQ]: _pv,
      },
    ],
    [
      0,
      {
        [_hQ]: _po,
      },
    ],
    [
      () => DistanceMeters,
      {
        [_hQ]: _r,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _su,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      () => SensitiveInteger,
      {
        [_hQ]: _w,
      },
    ],
    [
      () => SensitiveFloat,
      {
        [_hQ]: _z,
      },
    ],
  ]
);
export var GetStaticMapResponse = struct(
  n0,
  _GSMRe,
  0,
  [_B, _CT, _CCa, _ET, _PB],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
  ]
);
export var GetStyleDescriptorRequest = struct(
  n0,
  _GSDR,
  0,
  [_S, _CS, _PV, _K],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cs,
      },
    ],
    [
      () => CountryCode,
      {
        [_hQ]: _pv,
      },
    ],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetStyleDescriptorResponse = struct(
  n0,
  _GSDRe,
  0,
  [_B, _CT, _CCa, _ET],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
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
export var GetTileRequest = struct(
  n0,
  _GTR,
  0,
  [_T, _Z_, _X, _Y, _K],
  [
    [0, 1],
    [() => SensitiveString, 1],
    [() => SensitiveString, 1],
    [() => SensitiveString, 1],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetTileResponse = struct(
  n0,
  _GTRe,
  0,
  [_B, _CT, _CCa, _ET, _PB],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
  ]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Re, _FL],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      () => ValidationExceptionFieldList,
      {
        [_jN]: _fL,
      },
    ],
  ],

  __ValidationException
);
export var ValidationExceptionField = struct(
  n0,
  _VEF,
  0,
  [_N, _M],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, [() => ValidationExceptionField, 0]);
export var GetGlyphs = op(
  n0,
  _GG,
  {
    [_ht]: ["GET", "/glyphs/{FontStack}/{FontUnicodeRange}", 200],
  },
  () => GetGlyphsRequest,
  () => GetGlyphsResponse
);
export var GetSprites = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/styles/{Style}/{ColorScheme}/{Variant}/sprites/{FileName}", 200],
  },
  () => GetSpritesRequest,
  () => GetSpritesResponse
);
export var GetStaticMap = op(
  n0,
  _GSM,
  {
    [_ht]: ["GET", "/static/{FileName}", 200],
  },
  () => GetStaticMapRequest,
  () => GetStaticMapResponse
);
export var GetStyleDescriptor = op(
  n0,
  _GSD,
  {
    [_ht]: ["GET", "/styles/{Style}/descriptor", 200],
  },
  () => GetStyleDescriptorRequest,
  () => GetStyleDescriptorResponse
);
export var GetTile = op(
  n0,
  _GT,
  {
    [_ht]: ["GET", "/tiles/{Tileset}/{Z}/{X}/{Y}", 200],
  },
  () => GetTileRequest,
  () => GetTileResponse
);
