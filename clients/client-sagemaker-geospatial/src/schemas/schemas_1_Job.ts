// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _ab,
  _AM,
  _AOI,
  _AOIG,
  _ARC,
  _As,
  _AV,
  _BF,
  _BFa,
  _C,
  _CO,
  _DT,
  _ECC,
  _ECCI,
  _ERA,
  _ET,
  _G,
  _GT,
  _GTI,
  _GTO,
  _H,
  _h,
  _hQ,
  _I,
  _IA,
  _IM,
  _IS,
  _ISL,
  _It,
  _LB,
  _LCCL,
  _LCCLI,
  _LO,
  _LR,
  _LRi,
  _LRL,
  _MPG,
  _MPGI,
  _mT,
  _NT,
  _ODT,
  _OF,
  _P,
  _PF,
  _PFL,
  _PFr,
  _PG,
  _PGI,
  _PIl,
  _Pl,
  _Po,
  _Pro,
  _RDCQ,
  _RDCQWBFI,
  _s,
  _SRDC,
  _SRDCI,
  _SRDCO,
  _ST,
  _T,
  _Tar,
  _TRF,
  _TRFI,
  _UB,
  _V,
  _VON,
  _VONI,
  _VSA,
  _VSAI,
  _VSE,
  _VSEI,
  _x,
  _y,
  _z,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BinaryFile = sim(n0, _BF, 42, {
  [_mT]: _ab,
  [_s]: 1,
});
export var NextToken = sim(n0, _NT, 0, 8);
export var AssetValue = struct(n0, _AV, 0, [_H], [0]);
export var EoCloudCoverInput = struct(n0, _ECCI, 0, [_LB, _UB], [1, 1]);
export var Geometry = struct(n0, _G, 0, [_T, _C], [0, [() => LinearRings, 0]]);
export var GetTileInput = struct(
  n0,
  _GTI,
  0,
  [_x, _y, _z, _IA, _Tar, _A, _IM, _OF, _TRF, _PF, _ODT, _ERA],
  [
    [1, 1],
    [1, 1],
    [1, 1],
    [
      64 | 0,
      {
        [_hQ]: _IA,
      },
    ],
    [
      0,
      {
        [_hQ]: _Tar,
      },
    ],
    [
      0,
      {
        [_hQ]: _A,
      },
    ],
    [
      2,
      {
        [_hQ]: _IM,
      },
    ],
    [
      0,
      {
        [_hQ]: _OF,
      },
    ],
    [
      0,
      {
        [_hQ]: _TRF,
      },
    ],
    [
      0,
      {
        [_hQ]: _PF,
      },
    ],
    [
      0,
      {
        [_hQ]: _ODT,
      },
    ],
    [
      0,
      {
        [_hQ]: _ERA,
      },
    ],
  ]
);
export var GetTileOutput = struct(n0, _GTO, 0, [_BF], [[() => BinaryFile, 16]]);
export var ItemSource = struct(
  n0,
  _IS,
  0,
  [_I, _G, _As, _DT, _P],
  [0, [() => Geometry, 0], () => AssetsMap, 4, () => Properties]
);
export var LandsatCloudCoverLandInput = struct(n0, _LCCLI, 0, [_LB, _UB], [1, 1]);
export var MultiPolygonGeometryInput = struct(n0, _MPGI, 0, [_C], [[() => LinearRingsList, 0]]);
export var PlatformInput = struct(n0, _PIl, 0, [_V, _CO], [0, 0]);
export var PolygonGeometryInput = struct(n0, _PGI, 0, [_C], [[() => LinearRings, 0]]);
export var Properties = struct(n0, _P, 0, [_ECC, _VON, _VSA, _VSE, _Pl, _LCCL], [1, 1, 1, 1, 0, 1]);
export var PropertyFilter = struct(n0, _PFr, 0, [_Pro], [() => Property]);
export var PropertyFilters = struct(n0, _PF, 0, [_P, _LO], [() => PropertyFiltersList, 0]);
export var RasterDataCollectionQueryWithBandFilterInput = struct(
  n0,
  _RDCQWBFI,
  0,
  [_TRF, _AOI, _PF, _BFa],
  [[() => TimeRangeFilterInput, 0], [() => AreaOfInterest, 0], () => PropertyFilters, 64 | 0]
);
export var SearchRasterDataCollectionInput = struct(
  n0,
  _SRDCI,
  0,
  [_A, _RDCQ, _NT],
  [0, [() => RasterDataCollectionQueryWithBandFilterInput, 0], [() => NextToken, 0]]
);
export var SearchRasterDataCollectionOutput = struct(
  n0,
  _SRDCO,
  0,
  [_ARC, _NT, _It],
  [1, [() => NextToken, 0], [() => ItemSourceList, 0]]
);
export var TimeRangeFilterInput = struct(n0, _TRFI, 8, [_ST, _ET], [4, 4]);
export var ViewOffNadirInput = struct(n0, _VONI, 0, [_LB, _UB], [1, 1]);
export var ViewSunAzimuthInput = struct(n0, _VSAI, 0, [_LB, _UB], [1, 1]);
export var ViewSunElevationInput = struct(n0, _VSEI, 0, [_LB, _UB], [1, 1]);
export var ItemSourceList = list(n0, _ISL, 0, [() => ItemSource, 0]);
export var LinearRing = list(n0, _LR, 0, [() => Position, 0]);
export var LinearRings = list(n0, _LRi, 0, [() => LinearRing, 0]);
export var LinearRingsList = list(n0, _LRL, 0, [() => LinearRings, 0]);
export var Position = list(n0, _Po, 8, 1);
export var PropertyFiltersList = list(n0, _PFL, 0, () => PropertyFilter);
export var StringListInput = 64 | 0;

export var AssetsMap = map(n0, _AM, 0, 0, () => AssetValue);
export var AreaOfInterest = uni(n0, _AOI, 0, [_AOIG], [[() => AreaOfInterestGeometry, 0]]);
export var AreaOfInterestGeometry = uni(
  n0,
  _AOIG,
  0,
  [_PG, _MPG],
  [
    [() => PolygonGeometryInput, 0],
    [() => MultiPolygonGeometryInput, 0],
  ]
);
export var Property = uni(
  n0,
  _Pro,
  0,
  [_ECC, _VON, _VSA, _VSE, _Pl, _LCCL],
  [
    () => EoCloudCoverInput,
    () => ViewOffNadirInput,
    () => ViewSunAzimuthInput,
    () => ViewSunElevationInput,
    () => PlatformInput,
    () => LandsatCloudCoverLandInput,
  ]
);
export var GetTile = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/tile/{z}/{x}/{y}", 200],
  },
  () => GetTileInput,
  () => GetTileOutput
);
export var SearchRasterDataCollection = op(
  n0,
  _SRDC,
  {
    [_h]: ["POST", "/search-raster-data-collection", 200],
  },
  () => SearchRasterDataCollectionInput,
  () => SearchRasterDataCollectionOutput
);
