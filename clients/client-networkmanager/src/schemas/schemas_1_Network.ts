// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _As,
  _CA,
  _Ci,
  _CN,
  _CNA,
  _CNAI,
  _CNC,
  _CNCL,
  _CNCo,
  _CNCV,
  _CNE,
  _CNEL,
  _CNI,
  _CNNFG,
  _CNNFGI,
  _CNNFGL,
  _CNS,
  _CNSE,
  _CNSEI,
  _CNSL,
  _D,
  _DCB,
  _DCN,
  _DCNR,
  _DCNRe,
  _Des,
  _DF,
  _DIe,
  _DSn,
  _E,
  _ECM,
  _EL,
  _ELd,
  _EO,
  _ES,
  _ESL,
  _FM,
  _GCN,
  _GCNCS,
  _GCNCSR,
  _GCNCSRe,
  _GCNR,
  _GCNRe,
  _GNI,
  _GNRe,
  _GNRRet,
  _GNRRete,
  _h,
  _hQ,
  _I,
  _ICB,
  _IP,
  _LPM,
  _Mod,
  _MR,
  _mR,
  _N,
  _NFG,
  _NFGe,
  _NFGL,
  _NFGN,
  _NRD,
  _NRDL,
  _NRe,
  _NRetw,
  _NRLe,
  _NT,
  _nT,
  _NV,
  _PLI,
  _PLIr,
  _PV,
  _PVI,
  _RIe,
  _RT,
  _RTA,
  _RTI,
  _RTT,
  _RTTo,
  _S,
  _Se,
  _SGRS,
  _SIA,
  _SIAe,
  _SIAL,
  _SIS,
  _SN,
  _SOM,
  _SOMu,
  _SS,
  _Sta,
  _STe,
  _SV,
  _T,
  _TGAI,
  _TGRTA,
  _Ty,
  _Typ,
  _UCN,
  _UCNR,
  _UCNRp,
  _UE,
  _VES,
  _Vi,
  _WEO,
  _WEOL,
  _WST,
  _WSTSL,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CoreNetwork = struct(
  n0,
  _CN,
  0,
  [_GNI, _CNI, _CNA, _D, _CA, _S, _Se, _NFG, _E, _T],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    () => CoreNetworkSegmentList,
    () => CoreNetworkNetworkFunctionGroupList,
    () => CoreNetworkEdgeList,
    () => TagList,
  ]
);
export var CoreNetworkChange = struct(
  n0,
  _CNC,
  0,
  [_Ty, _Ac, _I, _PV, _NV, _IP],
  [0, 0, 0, () => CoreNetworkChangeValues, () => CoreNetworkChangeValues, 0]
);
export var CoreNetworkChangeValues = struct(
  n0,
  _CNCV,
  0,
  [_SN, _NFGN, _ELd, _As, _Ci, _DIe, _ICB, _SS, _SIA, _VES, _DSn, _SGRS],
  [0, 0, 64 | 0, 1, 0, 0, 64 | 0, 64 | 0, () => ServiceInsertionActionList, 2, 2, 2]
);
export var CoreNetworkEdge = struct(n0, _CNE, 0, [_EL, _As, _ICB], [0, 1, 64 | 0]);
export var CoreNetworkNetworkFunctionGroup = struct(
  n0,
  _CNNFG,
  0,
  [_N, _ELd, _Se],
  [0, 64 | 0, () => ServiceInsertionSegments]
);
export var CoreNetworkNetworkFunctionGroupIdentifier = struct(n0, _CNNFGI, 0, [_CNI, _NFGN, _EL], [0, 0, 0]);
export var CoreNetworkSegment = struct(n0, _CNS, 0, [_N, _ELd, _SS], [0, 64 | 0, 64 | 0]);
export var CoreNetworkSegmentEdgeIdentifier = struct(n0, _CNSEI, 0, [_CNI, _SN, _EL], [0, 0, 0]);
export var DeleteCoreNetworkRequest = struct(n0, _DCNR, 0, [_CNI], [[0, 1]]);
export var DeleteCoreNetworkResponse = struct(n0, _DCNRe, 0, [_CN], [() => CoreNetwork]);
export var EdgeOverride = struct(n0, _EO, 0, [_ES, _UE], [list(n0, _ESL, 0, 64 | 0), 0]);
export var GetCoreNetworkChangeSetRequest = struct(
  n0,
  _GCNCSR,
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
export var GetCoreNetworkChangeSetResponse = struct(n0, _GCNCSRe, 0, [_CNCo, _NT], [() => CoreNetworkChangeList, 0]);
export var GetCoreNetworkRequest = struct(n0, _GCNR, 0, [_CNI], [[0, 1]]);
export var GetCoreNetworkResponse = struct(n0, _GCNRe, 0, [_CN], [() => CoreNetwork]);
export var GetNetworkRoutesRequest = struct(
  n0,
  _GNRRet,
  0,
  [_GNI, _RTI, _ECM, _LPM, _SOM, _SOMu, _PLI, _Sta, _Typ, _DF],
  [
    [0, 1],
    () => RouteTableIdentifier,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    map(n0, _FM, 0, 0, 64 | 0),
  ]
);
export var GetNetworkRoutesResponse = struct(
  n0,
  _GNRRete,
  0,
  [_RTA, _CNSE, _RTT, _RTTo, _NRe],
  [0, () => CoreNetworkSegmentEdgeIdentifier, 0, 4, () => NetworkRouteList]
);
export var NetworkFunctionGroup = struct(n0, _NFGe, 0, [_N], [0]);
export var NetworkRoute = struct(
  n0,
  _NRetw,
  0,
  [_DCB, _Des, _PLIr, _S, _Ty],
  [0, () => NetworkRouteDestinationList, 0, 0, 0]
);
export var NetworkRouteDestination = struct(
  n0,
  _NRD,
  0,
  [_CNAI, _TGAI, _SN, _NFGN, _EL, _RT, _RIe],
  [0, 0, 0, 0, 0, 0, 0]
);
export var RouteTableIdentifier = struct(
  n0,
  _RTI,
  0,
  [_TGRTA, _CNSE, _CNNFG],
  [0, () => CoreNetworkSegmentEdgeIdentifier, () => CoreNetworkNetworkFunctionGroupIdentifier]
);
export var ServiceInsertionAction = struct(n0, _SIAe, 0, [_Ac, _Mod, _WST, _Vi], [0, 0, () => WhenSentTo, () => Via]);
export var ServiceInsertionSegments = struct(n0, _SIS, 0, [_SV, _STe], [64 | 0, 64 | 0]);
export var UpdateCoreNetworkRequest = struct(n0, _UCNR, 0, [_CNI, _D], [[0, 1], 0]);
export var UpdateCoreNetworkResponse = struct(n0, _UCNRp, 0, [_CN], [() => CoreNetwork]);
export var Via = struct(n0, _Vi, 0, [_NFG, _WEO], [() => NetworkFunctionGroupList, () => WithEdgeOverridesList]);
export var WhenSentTo = struct(n0, _WST, 0, [_WSTSL], [64 | 0]);
export var ConstrainedStringList = 64 | 0;

export var CoreNetworkChangeList = list(n0, _CNCL, 0, () => CoreNetworkChange);
export var CoreNetworkEdgeList = list(n0, _CNEL, 0, () => CoreNetworkEdge);
export var CoreNetworkNetworkFunctionGroupList = list(n0, _CNNFGL, 0, () => CoreNetworkNetworkFunctionGroup);
export var CoreNetworkSegmentList = list(n0, _CNSL, 0, () => CoreNetworkSegment);
export var EdgeSet = 64 | 0;

export var EdgeSetList = list(n0, _ESL, 0, 64 | 0);
export var FilterValues = 64 | 0;

export var NetworkFunctionGroupList = list(n0, _NFGL, 0, () => NetworkFunctionGroup);
export var NetworkRouteDestinationList = list(n0, _NRDL, 0, () => NetworkRouteDestination);
export var NetworkRouteList = list(n0, _NRLe, 0, () => NetworkRoute);
export var RouteStateList = 64 | 0;

export var RouteTypeList = 64 | 0;

export var ServiceInsertionActionList = list(n0, _SIAL, 0, () => ServiceInsertionAction);
export var WhenSentToSegmentsList = 64 | 0;

export var WithEdgeOverridesList = list(n0, _WEOL, 0, () => EdgeOverride);
export var FilterMap = map(n0, _FM, 0, 0, 64 | 0);
export var DeleteCoreNetwork = op(
  n0,
  _DCN,
  {
    [_h]: ["DELETE", "/core-networks/{CoreNetworkId}", 200],
  },
  () => DeleteCoreNetworkRequest,
  () => DeleteCoreNetworkResponse
);
export var GetCoreNetwork = op(
  n0,
  _GCN,
  {
    [_h]: ["GET", "/core-networks/{CoreNetworkId}", 200],
  },
  () => GetCoreNetworkRequest,
  () => GetCoreNetworkResponse
);
export var GetCoreNetworkChangeSet = op(
  n0,
  _GCNCS,
  {
    [_h]: ["GET", "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}", 200],
  },
  () => GetCoreNetworkChangeSetRequest,
  () => GetCoreNetworkChangeSetResponse
);
export var GetNetworkRoutes = op(
  n0,
  _GNRe,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/network-routes", 200],
  },
  () => GetNetworkRoutesRequest,
  () => GetNetworkRoutesResponse
);
export var UpdateCoreNetwork = op(
  n0,
  _UCN,
  {
    [_h]: ["PATCH", "/core-networks/{CoreNetworkId}", 200],
  },
  () => UpdateCoreNetworkRequest,
  () => UpdateCoreNetworkResponse
);
