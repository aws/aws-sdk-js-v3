// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACI,
  _aCI,
  _Ar,
  _ar,
  _Ci,
  _ci,
  _CNR,
  _CNr,
  _CNRr,
  _DN,
  _DNes,
  _DNR,
  _DNRe,
  _DNRes,
  _DNResc,
  _DNS,
  _Ga,
  _ga,
  _hQ,
  _ht,
  _I,
  _i,
  _IPCR,
  _IPp,
  _iPp,
  _IPpo,
  _IPUR,
  _iTd,
  _jN,
  _LN,
  _LNR,
  _LNRi,
  _lODNS,
  _lOIP,
  _lOIPCR,
  _lOIPUR,
  _lORCR,
  _lORi,
  _lORUR,
  _MR,
  _mR,
  _N,
  _n,
  _Net,
  _net,
  _NI,
  _NT,
  _nT,
  _RCR,
  _RIe,
  _rIe,
  _Ro,
  _ro,
  _Rou,
  _RUR,
  _St,
  _st,
  _Ta,
  _ta,
  _UN,
  _UNR,
  _UNRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNetworkRequest = struct(
  n0,
  _CNR,
  0,
  [_IPp, _N, _RIe, _Ro, _Ta],
  [
    [
      () => __listOfIpPoolCreateRequest,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      () => __listOfRouteCreateRequest,
      {
        [_jN]: _ro,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateNetworkResponse = struct(
  n0,
  _CNRr,
  0,
  [_Ar, _ACI, _I, _IPp, _N, _Ro, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfIpPool,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfRoute,
      {
        [_jN]: _ro,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DeleteNetworkRequest = struct(n0, _DNR, 0, [_NI], [[0, 1]]);
export var DeleteNetworkResponse = struct(
  n0,
  _DNRe,
  0,
  [_Ar, _ACI, _I, _IPp, _N, _Ro, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfIpPool,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfRoute,
      {
        [_jN]: _ro,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeNetworkRequest = struct(n0, _DNRes, 0, [_NI], [[0, 1]]);
export var DescribeNetworkResponse = struct(
  n0,
  _DNResc,
  0,
  [_Ar, _ACI, _I, _IPp, _N, _Ro, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfIpPool,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfRoute,
      {
        [_jN]: _ro,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeNetworkSummary = struct(
  n0,
  _DNS,
  0,
  [_Ar, _ACI, _I, _IPp, _N, _Ro, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfIpPool,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfRoute,
      {
        [_jN]: _ro,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var IpPool = struct(
  n0,
  _IPpo,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
  ]
);
export var IpPoolCreateRequest = struct(
  n0,
  _IPCR,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
  ]
);
export var IpPoolUpdateRequest = struct(
  n0,
  _IPUR,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
  ]
);
export var ListNetworksRequest = struct(
  n0,
  _LNR,
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
export var ListNetworksResponse = struct(
  n0,
  _LNRi,
  0,
  [_Net, _NT],
  [
    [
      () => __listOfDescribeNetworkSummary,
      {
        [_jN]: _net,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Route = struct(
  n0,
  _Rou,
  0,
  [_Ci, _Ga],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
  ]
);
export var RouteCreateRequest = struct(
  n0,
  _RCR,
  0,
  [_Ci, _Ga],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
  ]
);
export var RouteUpdateRequest = struct(
  n0,
  _RUR,
  0,
  [_Ci, _Ga],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
  ]
);
export var UpdateNetworkRequest = struct(
  n0,
  _UNR,
  0,
  [_IPp, _N, _NI, _Ro],
  [
    [
      () => __listOfIpPoolUpdateRequest,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [0, 1],
    [
      () => __listOfRouteUpdateRequest,
      {
        [_jN]: _ro,
      },
    ],
  ]
);
export var UpdateNetworkResponse = struct(
  n0,
  _UNRp,
  0,
  [_Ar, _ACI, _I, _IPp, _N, _Ro, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfIpPool,
      {
        [_jN]: _iPp,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfRoute,
      {
        [_jN]: _ro,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var __listOfDescribeNetworkSummary = list(n0, _lODNS, 0, [() => DescribeNetworkSummary, 0]);
export var __listOfIpPool = list(n0, _lOIP, 0, [() => IpPool, 0]);
export var __listOfIpPoolCreateRequest = list(n0, _lOIPCR, 0, [() => IpPoolCreateRequest, 0]);
export var __listOfIpPoolUpdateRequest = list(n0, _lOIPUR, 0, [() => IpPoolUpdateRequest, 0]);
export var __listOfRoute = list(n0, _lORi, 0, [() => Route, 0]);
export var __listOfRouteCreateRequest = list(n0, _lORCR, 0, [() => RouteCreateRequest, 0]);
export var __listOfRouteUpdateRequest = list(n0, _lORUR, 0, [() => RouteUpdateRequest, 0]);
export var CreateNetwork = op(
  n0,
  _CNr,
  {
    [_ht]: ["POST", "/prod/networks", 201],
  },
  () => CreateNetworkRequest,
  () => CreateNetworkResponse
);
export var DeleteNetwork = op(
  n0,
  _DN,
  {
    [_ht]: ["DELETE", "/prod/networks/{NetworkId}", 202],
  },
  () => DeleteNetworkRequest,
  () => DeleteNetworkResponse
);
export var DescribeNetwork = op(
  n0,
  _DNes,
  {
    [_ht]: ["GET", "/prod/networks/{NetworkId}", 200],
  },
  () => DescribeNetworkRequest,
  () => DescribeNetworkResponse
);
export var ListNetworks = op(
  n0,
  _LN,
  {
    [_ht]: ["GET", "/prod/networks", 200],
  },
  () => ListNetworksRequest,
  () => ListNetworksResponse
);
export var UpdateNetwork = op(
  n0,
  _UN,
  {
    [_ht]: ["PUT", "/prod/networks/{NetworkId}", 200],
  },
  () => UpdateNetworkRequest,
  () => UpdateNetworkResponse
);
