// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CNA,
  _CNI,
  _CNo,
  _CNSLo,
  _CNSo,
  _D,
  _GNI,
  _h,
  _hQ,
  _LCN,
  _LCNR,
  _LCNRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _OAI,
  _S,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CoreNetworkSummary = struct(
  n0,
  _CNSo,
  0,
  [_CNI, _CNA, _GNI, _OAI, _S, _D, _T],
  [0, 0, 0, 0, 0, 0, () => TagList]
);
export var ListCoreNetworksRequest = struct(
  n0,
  _LCNR,
  0,
  [_MR, _NT],
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
export var ListCoreNetworksResponse = struct(n0, _LCNRi, 0, [_CNo, _NT], [() => CoreNetworkSummaryList, 0]);
export var CoreNetworkSummaryList = list(n0, _CNSLo, 0, () => CoreNetworkSummary);
export var ListCoreNetworks = op(
  n0,
  _LCN,
  {
    [_h]: ["GET", "/core-networks", 200],
  },
  () => ListCoreNetworksRequest,
  () => ListCoreNetworksResponse
);
