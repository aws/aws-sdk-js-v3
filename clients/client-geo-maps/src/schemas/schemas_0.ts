const _ADE = "AccessDeniedException";
const _AF = "AdditionalFeatures";
const _AK = "ApiKey";
const _B = "Blob";
const _BB = "BoundingBox";
const _BP = "BoundedPositions";
const _C = "Center";
const _CC = "CountryCode";
const _CC_ = "Cache-Control";
const _CCa = "CacheControl";
const _CD = "ContourDensity";
const _CL = "CropLabels";
const _CO = "CompactOverlay";
const _CS = "ColorScheme";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _DM = "DistanceMeters";
const _ET = "ETag";
const _FL = "FieldList";
const _FN = "FileName";
const _FS = "FontStack";
const _FUR = "FontUnicodeRange";
const _GG = "GetGlyphs";
const _GGR = "GetGlyphsRequest";
const _GGRe = "GetGlyphsResponse";
const _GJO = "GeoJsonOverlay";
const _GS = "GetSprites";
const _GSD = "GetStyleDescriptor";
const _GSDR = "GetStyleDescriptorRequest";
const _GSDRe = "GetStyleDescriptorResponse";
const _GSM = "GetStaticMap";
const _GSMR = "GetStaticMapRequest";
const _GSMRe = "GetStaticMapResponse";
const _GSR = "GetSpritesRequest";
const _GSRe = "GetSpritesResponse";
const _GT = "GetTile";
const _GTR = "GetTileRequest";
const _GTRe = "GetTileResponse";
const _H = "Height";
const _ISE = "InternalServerException";
const _K = "Key";
const _L = "Language";
const _LS = "LabelSize";
const _M = "Message";
const _N = "Name";
const _P = "Padding";
const _PB = "PricingBucket";
const _PLS = "PositionListString";
const _POI = "PointsOfInterests";
const _PS = "PositionString";
const _PV = "PoliticalView";
const _R = "Radius";
const _RNFE = "ResourceNotFoundException";
const _Re = "Reason";
const _S = "Style";
const _SBU = "ScaleBarUnit";
const _SF = "SensitiveFloat";
const _SI = "SensitiveInteger";
const _SS = "SensitiveString";
const _T = "Terrain";
const _TE = "ThrottlingException";
const _TM = "TravelModes";
const _Ti = "Tileset";
const _Tr = "Traffic";
const _V = "Variant";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _W = "Width";
const _X = "X";
const _Y = "Y";
const _Z = "Zoom";
const _Z_ = "Z";
const _af = "additional-features";
const _bb = "bounding-box";
const _bp = "bounded-positions";
const _c = "client";
const _cd = "contour-density";
const _ce = "center";
const _cl = "crop-labels";
const _co = "compact-overlay";
const _cs = "color-scheme";
const _e = "error";
const _fL = "fieldList";
const _go = "geojson-overlay";
const _h = "height";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _ht = "http";
const _jN = "jsonName";
const _k = "key";
const _l = "lang";
const _ls = "label-size";
const _m = "message";
const _n = "name";
const _p = "padding";
const _po = "pois";
const _pv = "political-view";
const _r = "radius";
const _re = "reason";
const _s = "style";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.geomaps";
const _su = "scale-unit";
const _t = "terrain";
const _tm = "travel-modes";
const _tr = "traffic";
const _w = "width";
const _xagpb = "x-amz-geo-pricing-bucket";
const _z = "zoom";
const n0 = "com.amazonaws.geomaps";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { GeoMapsServiceException as __GeoMapsServiceException } from "../models/GeoMapsServiceException";

/* eslint no-var: 0 */

export var ApiKey: StaticSimpleSchema = [0, n0, _AK, 8, 0];
export var CompactOverlay: StaticSimpleSchema = [0, n0, _CO, 8, 0];
export var CountryCode: StaticSimpleSchema = [0, n0, _CC, 8, 0];
export var DistanceMeters: StaticSimpleSchema = [0, n0, _DM, 8, 1];
export var GeoJsonOverlay: StaticSimpleSchema = [0, n0, _GJO, 8, 0];
export var PositionListString: StaticSimpleSchema = [0, n0, _PLS, 8, 0];
export var PositionString: StaticSimpleSchema = [0, n0, _PS, 8, 0];
export var SensitiveFloat: StaticSimpleSchema = [0, n0, _SF, 8, 1];
export var SensitiveInteger: StaticSimpleSchema = [0, n0, _SI, 8, 1];
export var SensitiveString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var GetGlyphsRequest: StaticStructureSchema = [
  3,
  n0,
  _GGR,
  0,
  [_FS, _FUR],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetGlyphsResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var GetSpritesRequest: StaticStructureSchema = [
  3,
  n0,
  _GSR,
  0,
  [_FN, _S, _CS, _V],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var GetSpritesResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var GetStaticMapRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var GetStaticMapResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var GetStyleDescriptorRequest: StaticStructureSchema = [
  3,
  n0,
  _GSDR,
  0,
  [_S, _CS, _PV, _T, _CD, _Tr, _TM, _K],
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
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      0,
      {
        [_hQ]: _cd,
      },
    ],
    [
      0,
      {
        [_hQ]: _tr,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tm,
      },
    ],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ],
];
export var GetStyleDescriptorResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var GetTileRequest: StaticStructureSchema = [
  3,
  n0,
  _GTR,
  0,
  [_AF, _Ti, _Z_, _X, _Y, _K],
  [
    [
      64 | 0,
      {
        [_hQ]: _af,
      },
    ],
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
  ],
];
export var GetTileResponse: StaticStructureSchema = [
  3,
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
  ],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [
  3,
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
  ],
];
export var GeoMapsServiceException: StaticErrorSchema = [-3, _sm, "GeoMapsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(GeoMapsServiceException, __GeoMapsServiceException);

export var TileAdditionalFeatureList = 64 | 0;

export var TravelModeList = 64 | 0;

export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, [() => ValidationExceptionField, 0]];
export var GetGlyphs: StaticOperationSchema = [
  9,
  n0,
  _GG,
  {
    [_ht]: ["GET", "/glyphs/{FontStack}/{FontUnicodeRange}", 200],
  },
  () => GetGlyphsRequest,
  () => GetGlyphsResponse,
];
export var GetSprites: StaticOperationSchema = [
  9,
  n0,
  _GS,
  {
    [_ht]: ["GET", "/styles/{Style}/{ColorScheme}/{Variant}/sprites/{FileName}", 200],
  },
  () => GetSpritesRequest,
  () => GetSpritesResponse,
];
export var GetStaticMap: StaticOperationSchema = [
  9,
  n0,
  _GSM,
  {
    [_ht]: ["GET", "/static/{FileName}", 200],
  },
  () => GetStaticMapRequest,
  () => GetStaticMapResponse,
];
export var GetStyleDescriptor: StaticOperationSchema = [
  9,
  n0,
  _GSD,
  {
    [_ht]: ["GET", "/styles/{Style}/descriptor", 200],
  },
  () => GetStyleDescriptorRequest,
  () => GetStyleDescriptorResponse,
];
export var GetTile: StaticOperationSchema = [
  9,
  n0,
  _GT,
  {
    [_ht]: ["GET", "/tiles/{Tileset}/{Z}/{X}/{Y}", 200],
  },
  () => GetTileRequest,
  () => GetTileResponse,
];
