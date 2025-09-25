// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CC_,
  _CCa,
  _CT_,
  _CTo,
  _en,
  _FN,
  _FS,
  _FUR,
  _GMG,
  _GMGR,
  _GMGRe,
  _GMS,
  _GMSD,
  _GMSDR,
  _GMSDRe,
  _GMSR,
  _GMSRe,
  _GMT,
  _GMTR,
  _GMTRe,
  _h,
  _hH,
  _hQ,
  _K,
  _k,
  _MN,
  _X,
  _Y,
  _Z,
  n0,
} from "./schemas_0";
import { ApiKey } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var GetMapGlyphsRequest = struct(
  n0,
  _GMGR,
  0,
  [_MN, _FS, _FUR, _K],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetMapGlyphsResponse = struct(
  n0,
  _GMGRe,
  0,
  [_B, _CTo, _CCa],
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
  ]
);
export var GetMapSpritesRequest = struct(
  n0,
  _GMSR,
  0,
  [_MN, _FN, _K],
  [
    [0, 1],
    [0, 1],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetMapSpritesResponse = struct(
  n0,
  _GMSRe,
  0,
  [_B, _CTo, _CCa],
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
  ]
);
export var GetMapStyleDescriptorRequest = struct(
  n0,
  _GMSDR,
  0,
  [_MN, _K],
  [
    [0, 1],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetMapStyleDescriptorResponse = struct(
  n0,
  _GMSDRe,
  0,
  [_B, _CTo, _CCa],
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
  ]
);
export var GetMapTileRequest = struct(
  n0,
  _GMTR,
  0,
  [_MN, _Z, _X, _Y, _K],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetMapTileResponse = struct(
  n0,
  _GMTRe,
  0,
  [_B, _CTo, _CCa],
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
  ]
);
export var GetMapGlyphs = op(
  n0,
  _GMG,
  {
    [_h]: ["GET", "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}", 200],
    [_en]: ["maps."],
  },
  () => GetMapGlyphsRequest,
  () => GetMapGlyphsResponse
);
export var GetMapSprites = op(
  n0,
  _GMS,
  {
    [_h]: ["GET", "/maps/v0/maps/{MapName}/sprites/{FileName}", 200],
    [_en]: ["maps."],
  },
  () => GetMapSpritesRequest,
  () => GetMapSpritesResponse
);
export var GetMapStyleDescriptor = op(
  n0,
  _GMSD,
  {
    [_h]: ["GET", "/maps/v0/maps/{MapName}/style-descriptor", 200],
    [_en]: ["maps."],
  },
  () => GetMapStyleDescriptorRequest,
  () => GetMapStyleDescriptorResponse
);
export var GetMapTile = op(
  n0,
  _GMT,
  {
    [_h]: ["GET", "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}", 200],
    [_en]: ["maps."],
  },
  () => GetMapTileRequest,
  () => GetMapTileResponse
);
