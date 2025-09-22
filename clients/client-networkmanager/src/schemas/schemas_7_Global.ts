// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CGN,
  _CGNR,
  _CGNRr,
  _D,
  _DGN,
  _DGNe,
  _DGNR,
  _DGNRe,
  _DGNRes,
  _DGNResc,
  _GN,
  _GNA,
  _GNI,
  _gNI,
  _GNIl,
  _GNL,
  _GNl,
  _h,
  _hQ,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _T,
  _UGN,
  _UGNR,
  _UGNRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGlobalNetworkRequest = struct(n0, _CGNR, 0, [_D, _T], [0, () => TagList]);
export var CreateGlobalNetworkResponse = struct(n0, _CGNRr, 0, [_GN], [() => GlobalNetwork]);
export var DeleteGlobalNetworkRequest = struct(n0, _DGNR, 0, [_GNI], [[0, 1]]);
export var DeleteGlobalNetworkResponse = struct(n0, _DGNRe, 0, [_GN], [() => GlobalNetwork]);
export var DescribeGlobalNetworksRequest = struct(
  n0,
  _DGNRes,
  0,
  [_GNIl, _MR, _NT],
  [
    [
      64 | 0,
      {
        [_hQ]: _gNI,
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
export var DescribeGlobalNetworksResponse = struct(n0, _DGNResc, 0, [_GNl, _NT], [() => GlobalNetworkList, 0]);
export var GlobalNetwork = struct(n0, _GN, 0, [_GNI, _GNA, _D, _CA, _S, _T], [0, 0, 0, 4, 0, () => TagList]);
export var UpdateGlobalNetworkRequest = struct(n0, _UGNR, 0, [_GNI, _D], [[0, 1], 0]);
export var UpdateGlobalNetworkResponse = struct(n0, _UGNRp, 0, [_GN], [() => GlobalNetwork]);
export var GlobalNetworkIdList = 64 | 0;

export var GlobalNetworkList = list(n0, _GNL, 0, () => GlobalNetwork);
export var CreateGlobalNetwork = op(
  n0,
  _CGN,
  {
    [_h]: ["POST", "/global-networks", 200],
  },
  () => CreateGlobalNetworkRequest,
  () => CreateGlobalNetworkResponse
);
export var DeleteGlobalNetwork = op(
  n0,
  _DGN,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}", 200],
  },
  () => DeleteGlobalNetworkRequest,
  () => DeleteGlobalNetworkResponse
);
export var DescribeGlobalNetworks = op(
  n0,
  _DGNe,
  {
    [_h]: ["GET", "/global-networks", 200],
  },
  () => DescribeGlobalNetworksRequest,
  () => DescribeGlobalNetworksResponse
);
export var UpdateGlobalNetwork = op(
  n0,
  _UGN,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}", 200],
  },
  () => UpdateGlobalNetworkRequest,
  () => UpdateGlobalNetworkResponse
);
