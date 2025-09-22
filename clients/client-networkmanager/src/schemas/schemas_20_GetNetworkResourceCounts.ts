// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Cou,
  _GNI,
  _GNRC,
  _GNRCR,
  _GNRCRe,
  _h,
  _hQ,
  _MR,
  _mR,
  _NRC,
  _NRCe,
  _NRCL,
  _NT,
  _nT,
  _RT,
  _rT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetNetworkResourceCountsRequest = struct(
  n0,
  _GNRCR,
  0,
  [_GNI, _RT, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
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
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetNetworkResourceCountsResponse = struct(n0, _GNRCRe, 0, [_NRC, _NT], [() => NetworkResourceCountList, 0]);
export var NetworkResourceCount = struct(n0, _NRCe, 0, [_RT, _Cou], [0, 1]);
export var NetworkResourceCountList = list(n0, _NRCL, 0, () => NetworkResourceCount);
export var GetNetworkResourceCounts = op(
  n0,
  _GNRC,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/network-resource-count", 200],
  },
  () => GetNetworkResourceCountsRequest,
  () => GetNetworkResourceCountsResponse
);
