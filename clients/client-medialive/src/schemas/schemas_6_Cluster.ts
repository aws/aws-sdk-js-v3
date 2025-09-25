// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CCre,
  _CCRre,
  _CCRrea,
  _CI,
  _CIh,
  _cIh,
  _Cl,
  _cl,
  _CNS,
  _CNSCR,
  _CNSUR,
  _CT,
  _cT,
  _DCe,
  _DCesc,
  _DCRel,
  _DCRele,
  _DCRescr,
  _DCRescri,
  _DCS,
  _DR,
  _dR,
  _hQ,
  _ht,
  _I,
  _i,
  _IM,
  _iM,
  _IMCR,
  _IMn,
  _IMUR,
  _IRA,
  _iRA,
  _iTd,
  _jN,
  _LCis,
  _LCRis,
  _LCRist,
  _LINo,
  _lINo,
  _lODCS,
  _lOIM,
  _lOIMCR,
  _lOIMUR,
  _MR,
  _mR,
  _N,
  _n,
  _NI,
  _nI,
  _NS,
  _nS,
  _NT,
  _nT,
  _RIe,
  _rIe,
  _St,
  _st,
  _Ta,
  _ta,
  _UCp,
  _UCRpd,
  _UCRpda,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterNetworkSettings = struct(
  n0,
  _CNS,
  0,
  [_DR, _IM],
  [
    [
      0,
      {
        [_jN]: _dR,
      },
    ],
    [
      () => __listOfInterfaceMapping,
      {
        [_jN]: _iM,
      },
    ],
  ]
);
export var ClusterNetworkSettingsCreateRequest = struct(
  n0,
  _CNSCR,
  0,
  [_DR, _IM],
  [
    [
      0,
      {
        [_jN]: _dR,
      },
    ],
    [
      () => __listOfInterfaceMappingCreateRequest,
      {
        [_jN]: _iM,
      },
    ],
  ]
);
export var ClusterNetworkSettingsUpdateRequest = struct(
  n0,
  _CNSUR,
  0,
  [_DR, _IM],
  [
    [
      0,
      {
        [_jN]: _dR,
      },
    ],
    [
      () => __listOfInterfaceMappingUpdateRequest,
      {
        [_jN]: _iM,
      },
    ],
  ]
);
export var CreateClusterRequest = struct(
  n0,
  _CCRre,
  0,
  [_CT, _IRA, _N, _NS, _RIe, _Ta],
  [
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _iRA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettingsCreateRequest,
      {
        [_jN]: _nS,
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
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateClusterResponse = struct(
  n0,
  _CCRrea,
  0,
  [_Ar, _CIh, _CT, _I, _IRA, _N, _NS, _St],
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
        [_jN]: _cIh,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iRA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettings,
      {
        [_jN]: _nS,
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
export var DeleteClusterRequest = struct(n0, _DCRel, 0, [_CI], [[0, 1]]);
export var DeleteClusterResponse = struct(
  n0,
  _DCRele,
  0,
  [_Ar, _CIh, _CT, _I, _IRA, _N, _NS, _St],
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
        [_jN]: _cIh,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iRA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettings,
      {
        [_jN]: _nS,
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
export var DescribeClusterRequest = struct(n0, _DCRescr, 0, [_CI], [[0, 1]]);
export var DescribeClusterResponse = struct(
  n0,
  _DCRescri,
  0,
  [_Ar, _CIh, _CT, _I, _IRA, _N, _NS, _St],
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
        [_jN]: _cIh,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iRA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettings,
      {
        [_jN]: _nS,
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
export var DescribeClusterSummary = struct(
  n0,
  _DCS,
  0,
  [_Ar, _CIh, _CT, _I, _IRA, _N, _NS, _St],
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
        [_jN]: _cIh,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iRA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettings,
      {
        [_jN]: _nS,
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
export var InterfaceMapping = struct(
  n0,
  _IMn,
  0,
  [_LINo, _NI],
  [
    [
      0,
      {
        [_jN]: _lINo,
      },
    ],
    [
      0,
      {
        [_jN]: _nI,
      },
    ],
  ]
);
export var InterfaceMappingCreateRequest = struct(
  n0,
  _IMCR,
  0,
  [_LINo, _NI],
  [
    [
      0,
      {
        [_jN]: _lINo,
      },
    ],
    [
      0,
      {
        [_jN]: _nI,
      },
    ],
  ]
);
export var InterfaceMappingUpdateRequest = struct(
  n0,
  _IMUR,
  0,
  [_LINo, _NI],
  [
    [
      0,
      {
        [_jN]: _lINo,
      },
    ],
    [
      0,
      {
        [_jN]: _nI,
      },
    ],
  ]
);
export var ListClustersRequest = struct(
  n0,
  _LCRis,
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
export var ListClustersResponse = struct(
  n0,
  _LCRist,
  0,
  [_Cl, _NT],
  [
    [
      () => __listOfDescribeClusterSummary,
      {
        [_jN]: _cl,
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
export var UpdateClusterRequest = struct(
  n0,
  _UCRpd,
  0,
  [_CI, _N, _NS],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettingsUpdateRequest,
      {
        [_jN]: _nS,
      },
    ],
  ]
);
export var UpdateClusterResponse = struct(
  n0,
  _UCRpda,
  0,
  [_Ar, _CIh, _CT, _I, _N, _NS, _St],
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
        [_jN]: _cIh,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => ClusterNetworkSettings,
      {
        [_jN]: _nS,
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
export var __listOfDescribeClusterSummary = list(n0, _lODCS, 0, [() => DescribeClusterSummary, 0]);
export var __listOfInterfaceMapping = list(n0, _lOIM, 0, [() => InterfaceMapping, 0]);
export var __listOfInterfaceMappingCreateRequest = list(n0, _lOIMCR, 0, [() => InterfaceMappingCreateRequest, 0]);
export var __listOfInterfaceMappingUpdateRequest = list(n0, _lOIMUR, 0, [() => InterfaceMappingUpdateRequest, 0]);
export var CreateCluster = op(
  n0,
  _CCre,
  {
    [_ht]: ["POST", "/prod/clusters", 201],
  },
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var DeleteCluster = op(
  n0,
  _DCe,
  {
    [_ht]: ["DELETE", "/prod/clusters/{ClusterId}", 202],
  },
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DescribeCluster = op(
  n0,
  _DCesc,
  {
    [_ht]: ["GET", "/prod/clusters/{ClusterId}", 200],
  },
  () => DescribeClusterRequest,
  () => DescribeClusterResponse
);
export var ListClusters = op(
  n0,
  _LCis,
  {
    [_ht]: ["GET", "/prod/clusters", 200],
  },
  () => ListClustersRequest,
  () => ListClustersResponse
);
export var UpdateCluster = op(
  n0,
  _UCp,
  {
    [_ht]: ["PUT", "/prod/clusters/{ClusterId}", 200],
  },
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
