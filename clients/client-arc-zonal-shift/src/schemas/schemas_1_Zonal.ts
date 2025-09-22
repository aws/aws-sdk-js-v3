// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aF,
  _AIR,
  _AIRu,
  _AS,
  _aS,
  _ASu,
  _au,
  _aWp,
  _aZ,
  _co,
  _eT,
  _eTx,
  _h,
  _hQ,
  _i,
  _LA,
  _LAR,
  _LARi,
  _LMR,
  _LMRR,
  _LMRRi,
  _LZS,
  _LZSR,
  _LZSRi,
  _mR,
  _MRS,
  _MRSa,
  _n,
  _nT,
  _pRO,
  _pRS,
  _rI,
  _s,
  _sT,
  _sTh,
  _zAS,
  _zS,
  _zSI,
  _ZSIR,
  _ZSIRo,
  _ZSS,
  _ZSSo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoshiftInResource = struct(n0, _AIR, 0, [_aS, _aF, _sT], [0, 0, 4]);
export var AutoshiftSummary = struct(n0, _AS, 0, [_aF, _eT, _sT, _s], [0, 4, 4, 0]);
export var ListAutoshiftsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _s, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAutoshiftsResponse = struct(n0, _LARi, 0, [_i, _nT], [() => AutoshiftSummaries, 0]);
export var ListManagedResourcesRequest = struct(
  n0,
  _LMRR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListManagedResourcesResponse = struct(n0, _LMRRi, 0, [_i, _nT], [() => ManagedResourceSummaries, 0]);
export var ListZonalShiftsRequest = struct(
  n0,
  _LZSR,
  0,
  [_nT, _s, _mR, _rI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
  ]
);
export var ListZonalShiftsResponse = struct(n0, _LZSRi, 0, [_i, _nT], [() => ZonalShiftSummaries, 0]);
export var ManagedResourceSummary = struct(
  n0,
  _MRS,
  0,
  [_a, _n, _aZ, _aWp, _zS, _au, _zAS, _pRS],
  [0, 0, 64 | 0, 128 | 1, () => ZonalShiftsInResource, () => AutoshiftsInResource, 0, 0]
);
export var ZonalShiftInResource = struct(
  n0,
  _ZSIR,
  0,
  [_aS, _zSI, _rI, _aF, _eTx, _sT, _co, _sTh, _pRO],
  [0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var ZonalShiftSummary = struct(
  n0,
  _ZSS,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co, _sTh, _pRO],
  [0, 0, 0, 4, 4, 0, 0, 0, 0]
);
export var AutoshiftsInResource = list(n0, _AIRu, 0, () => AutoshiftInResource);
export var AutoshiftSummaries = list(n0, _ASu, 0, () => AutoshiftSummary);
export var AvailabilityZones = 64 | 0;

export var ManagedResourceSummaries = list(n0, _MRSa, 0, () => ManagedResourceSummary);
export var ZonalShiftsInResource = list(n0, _ZSIRo, 0, () => ZonalShiftInResource);
export var ZonalShiftSummaries = list(n0, _ZSSo, 0, () => ZonalShiftSummary);
export var AppliedWeights = 128 | 1;

export var ListAutoshifts = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/autoshifts", 200],
  },
  () => ListAutoshiftsRequest,
  () => ListAutoshiftsResponse
);
export var ListManagedResources = op(
  n0,
  _LMR,
  {
    [_h]: ["GET", "/managedresources", 200],
  },
  () => ListManagedResourcesRequest,
  () => ListManagedResourcesResponse
);
export var ListZonalShifts = op(
  n0,
  _LZS,
  {
    [_h]: ["GET", "/zonalshifts", 200],
  },
  () => ListZonalShiftsRequest,
  () => ListZonalShiftsResponse
);
