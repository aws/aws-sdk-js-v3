// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _en,
  _h,
  _hQ,
  _i,
  _it,
  _LSN,
  _LSNR,
  _LSNRi,
  _lUA,
  _mR,
  _n,
  _nOARC,
  _nOAS,
  _nOAVPC,
  _nT,
  _SC,
  _SNL,
  _SNS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListServiceNetworksRequest = struct(
  n0,
  _LSNR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListServiceNetworksResponse = struct(n0, _LSNRi, 0, [_it, _nT], [() => ServiceNetworkList, 0]);
export var ServiceNetworkSummary = struct(
  n0,
  _SNS,
  0,
  [_i, _n, _a, _cA, _lUA, _nOAVPC, _nOAS, _nOARC],
  [0, 0, 0, 5, 5, 1, 1, 1]
);
export var SharingConfig = struct(n0, _SC, 0, [_en], [2]);
export var ServiceNetworkList = list(n0, _SNL, 0, () => ServiceNetworkSummary);
export var ListServiceNetworks = op(
  n0,
  _LSN,
  {
    [_h]: ["GET", "/servicenetworks", 200],
  },
  () => ListServiceNetworksRequest,
  () => ListServiceNetworksResponse
);
