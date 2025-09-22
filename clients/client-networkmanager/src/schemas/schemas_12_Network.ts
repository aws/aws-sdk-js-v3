// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _AIc,
  _AR,
  _aR,
  _CNI,
  _cNI,
  _Def,
  _DT,
  _GNI,
  _GNR,
  _GNRR,
  _GNRRe,
  _h,
  _hQ,
  _Me,
  _MR,
  _mR,
  _NR,
  _NRet,
  _NRL,
  _NT,
  _nT,
  _RA,
  _rA,
  _RGA,
  _rGA,
  _RIe,
  _RT,
  _rT,
  _T,
  _UNRM,
  _UNRMR,
  _UNRMRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetNetworkResourcesRequest = struct(
  n0,
  _GNRR,
  0,
  [_GNI, _CNI, _RGA, _AR, _AIc, _RT, _RA, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rGA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rA,
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
export var GetNetworkResourcesResponse = struct(n0, _GNRRe, 0, [_NR, _NT], [() => NetworkResourceList, 0]);
export var NetworkResource = struct(
  n0,
  _NRet,
  0,
  [_RGA, _CNI, _AR, _AIc, _RT, _RIe, _RA, _Def, _DT, _T, _Me],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, () => TagList, 128 | 0]
);
export var UpdateNetworkResourceMetadataRequest = struct(n0, _UNRMR, 0, [_GNI, _RA, _Me], [[0, 1], [0, 1], 128 | 0]);
export var UpdateNetworkResourceMetadataResponse = struct(n0, _UNRMRp, 0, [_RA, _Me], [0, 128 | 0]);
export var NetworkResourceList = list(n0, _NRL, 0, () => NetworkResource);
export var NetworkResourceMetadataMap = 128 | 0;

export var GetNetworkResources = op(
  n0,
  _GNR,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/network-resources", 200],
  },
  () => GetNetworkResourcesRequest,
  () => GetNetworkResourcesResponse
);
export var UpdateNetworkResourceMetadata = op(
  n0,
  _UNRM,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata", 200],
  },
  () => UpdateNetworkResourceMetadataRequest,
  () => UpdateNetworkResourceMetadataResponse
);
