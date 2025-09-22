// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AI,
  _Ci,
  _CNCE,
  _CNCEL,
  _CNCEo,
  _CNCEV,
  _CNI,
  _EL,
  _ET,
  _GCNCE,
  _GCNCER,
  _GCNCERe,
  _h,
  _hQ,
  _IP,
  _MR,
  _mR,
  _NFGN,
  _NT,
  _nT,
  _PVI,
  _SN,
  _St,
  _Ty,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CoreNetworkChangeEvent = struct(
  n0,
  _CNCE,
  0,
  [_Ty, _Ac, _IP, _ET, _St, _V],
  [0, 0, 0, 4, 0, () => CoreNetworkChangeEventValues]
);
export var CoreNetworkChangeEventValues = struct(n0, _CNCEV, 0, [_EL, _SN, _NFGN, _AI, _Ci], [0, 0, 0, 0, 0]);
export var GetCoreNetworkChangeEventsRequest = struct(
  n0,
  _GCNCER,
  0,
  [_CNI, _PVI, _MR, _NT],
  [
    [0, 1],
    [1, 1],
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
export var GetCoreNetworkChangeEventsResponse = struct(
  n0,
  _GCNCERe,
  0,
  [_CNCEo, _NT],
  [() => CoreNetworkChangeEventList, 0]
);
export var CoreNetworkChangeEventList = list(n0, _CNCEL, 0, () => CoreNetworkChangeEvent);
export var GetCoreNetworkChangeEvents = op(
  n0,
  _GCNCE,
  {
    [_h]: ["GET", "/core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}", 200],
  },
  () => GetCoreNetworkChangeEventsRequest,
  () => GetCoreNetworkChangeEventsResponse
);
