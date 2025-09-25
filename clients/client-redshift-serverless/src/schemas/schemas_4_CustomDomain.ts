// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InsufficientCapacityException as __InsufficientCapacityException,
  Ipv6CidrBlockNotFoundException as __Ipv6CidrBlockNotFoundException,
} from "../models/index";
import {
  _A,
  _ad,
  _AL,
  _as,
  _bC,
  _c,
  _cAV,
  _CCDA,
  _CCDAR,
  _CCDARr,
  _cD,
  _cDCA,
  _cDCET,
  _cDN,
  _CP,
  _cP,
  _CPL,
  _CW,
  _CWR,
  _CWRr,
  _DCDA,
  _DCDAR,
  _DCDARe,
  _dN,
  _dP,
  _dS,
  _dU,
  _DW,
  _DWR,
  _DWRe,
  _E,
  _e,
  _en,
  _eVR,
  _ex,
  _GC,
  _GCDA,
  _GCDAR,
  _GCDARe,
  _GCR,
  _GCRe,
  _GW,
  _GWR,
  _GWRe,
  _hE,
  _hQ,
  _iAT,
  _ICBNFE,
  _ICE,
  _l,
  _LCDA,
  _LCDAR,
  _LCDARi,
  _LW,
  _LWR,
  _LWRi,
  _m,
  _mC,
  _mR,
  _nN,
  _nRT,
  _nT,
  _oA,
  _pA,
  _pK,
  _po,
  _pPT,
  _PT,
  _pTN,
  _pV,
  _pVa,
  _sGI,
  _sI,
  _st,
  _t,
  _tN,
  _UCDA,
  _UCDAR,
  _UCDARp,
  _UW,
  _UWR,
  _UWRp,
  _vE,
  _VEL,
  _W,
  _w,
  _wA,
  _wI,
  _WL,
  _wN,
  _wo,
  _wV,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Scheduled";
import { VpcEndpoint } from "./schemas_3_Endpoint";
import { DbPassword, DbUser } from "./schemas_6_Namespace";

/* eslint no-var: 0 */

export var Association = struct(n0, _A, 0, [_cDCA, _cDCET, _cDN, _wN], [0, 5, 0, 0]);
export var ConfigParameter = struct(n0, _CP, 0, [_pK, _pV], [0, 0]);
export var CreateCustomDomainAssociationRequest = struct(n0, _CCDAR, 0, [_wN, _cDN, _cDCA], [0, 0, 0]);
export var CreateCustomDomainAssociationResponse = struct(n0, _CCDARr, 0, [_cDN, _wN, _cDCA, _cDCET], [0, 0, 0, 5]);
export var CreateWorkgroupRequest = struct(
  n0,
  _CWR,
  0,
  [_wN, _nN, _bC, _eVR, _cP, _sGI, _sI, _pA, _t, _po, _mC, _pPT, _iAT, _tN],
  [0, 0, 1, 2, () => ConfigParameterList, 64 | 0, 64 | 0, 2, () => TagList, 1, 1, () => PerformanceTarget, 0, 0]
);
export var CreateWorkgroupResponse = struct(n0, _CWRr, 0, [_w], [() => Workgroup]);
export var DeleteCustomDomainAssociationRequest = struct(n0, _DCDAR, 0, [_wN, _cDN], [0, 0]);
export var DeleteCustomDomainAssociationResponse = struct(n0, _DCDARe, 0, [], []);
export var DeleteWorkgroupRequest = struct(n0, _DWR, 0, [_wN], [0]);
export var DeleteWorkgroupResponse = struct(n0, _DWRe, 0, [_w], [() => Workgroup]);
export var Endpoint = struct(n0, _E, 0, [_ad, _po, _vE], [0, 1, () => VpcEndpointList]);
export var GetCredentialsRequest = struct(n0, _GCR, 0, [_dN, _dS, _wN, _cDN], [0, 1, 0, 0]);
export var GetCredentialsResponse = struct(
  n0,
  _GCRe,
  0,
  [_dU, _dP, _ex, _nRT],
  [[() => DbUser, 0], [() => DbPassword, 0], 4, 4]
);
export var GetCustomDomainAssociationRequest = struct(n0, _GCDAR, 0, [_cDN, _wN], [0, 0]);
export var GetCustomDomainAssociationResponse = struct(n0, _GCDARe, 0, [_cDN, _wN, _cDCA, _cDCET], [0, 0, 0, 5]);
export var GetWorkgroupRequest = struct(n0, _GWR, 0, [_wN], [0]);
export var GetWorkgroupResponse = struct(n0, _GWRe, 0, [_w], [() => Workgroup]);
export var InsufficientCapacityException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InsufficientCapacityException
);
export var Ipv6CidrBlockNotFoundException = error(
  n0,
  _ICBNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __Ipv6CidrBlockNotFoundException
);
export var ListCustomDomainAssociationsRequest = struct(
  n0,
  _LCDAR,
  0,
  [_nT, _mR, _cDN, _cDCA],
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
    0,
    0,
  ]
);
export var ListCustomDomainAssociationsResponse = struct(n0, _LCDARi, 0, [_nT, _as], [0, () => AssociationList]);
export var ListWorkgroupsRequest = struct(
  n0,
  _LWR,
  0,
  [_nT, _mR, _oA],
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
    0,
  ]
);
export var ListWorkgroupsResponse = struct(n0, _LWRi, 0, [_nT, _wo], [0, () => WorkgroupList]);
export var PerformanceTarget = struct(n0, _PT, 0, [_st, _l], [0, 1]);
export var UpdateCustomDomainAssociationRequest = struct(n0, _UCDAR, 0, [_wN, _cDN, _cDCA], [0, 0, 0]);
export var UpdateCustomDomainAssociationResponse = struct(n0, _UCDARp, 0, [_cDN, _wN, _cDCA, _cDCET], [0, 0, 0, 5]);
export var UpdateWorkgroupRequest = struct(
  n0,
  _UWR,
  0,
  [_wN, _bC, _eVR, _cP, _pA, _sI, _sGI, _po, _mC, _iAT, _pPT, _tN],
  [0, 1, 2, () => ConfigParameterList, 2, 64 | 0, 64 | 0, 1, 1, 0, () => PerformanceTarget, 0]
);
export var UpdateWorkgroupResponse = struct(n0, _UWRp, 0, [_w], [() => Workgroup]);
export var Workgroup = struct(
  n0,
  _W,
  0,
  [
    _wI,
    _wA,
    _wN,
    _nN,
    _bC,
    _eVR,
    _cP,
    _sGI,
    _sI,
    _st,
    _en,
    _pA,
    _cD,
    _po,
    _cDN,
    _cDCA,
    _cDCET,
    _wV,
    _pVa,
    _mC,
    _cAV,
    _iAT,
    _pPT,
    _tN,
    _pTN,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    2,
    () => ConfigParameterList,
    64 | 0,
    64 | 0,
    0,
    () => Endpoint,
    2,
    5,
    1,
    0,
    0,
    5,
    0,
    0,
    1,
    64 | 0,
    0,
    () => PerformanceTarget,
    0,
    0,
  ]
);
export var AssociationList = list(n0, _AL, 0, () => Association);
export var ConfigParameterList = list(n0, _CPL, 0, () => ConfigParameter);
export var SecurityGroupIdList = 64 | 0;

export var VpcEndpointList = list(n0, _VEL, 0, () => VpcEndpoint);
export var VpcIds = 64 | 0;

export var WorkgroupList = list(n0, _WL, 0, () => Workgroup);
export var CreateCustomDomainAssociation = op(
  n0,
  _CCDA,
  0,
  () => CreateCustomDomainAssociationRequest,
  () => CreateCustomDomainAssociationResponse
);
export var CreateWorkgroup = op(
  n0,
  _CW,
  2,
  () => CreateWorkgroupRequest,
  () => CreateWorkgroupResponse
);
export var DeleteCustomDomainAssociation = op(
  n0,
  _DCDA,
  0,
  () => DeleteCustomDomainAssociationRequest,
  () => DeleteCustomDomainAssociationResponse
);
export var DeleteWorkgroup = op(
  n0,
  _DW,
  2,
  () => DeleteWorkgroupRequest,
  () => DeleteWorkgroupResponse
);
export var GetCredentials = op(
  n0,
  _GC,
  0,
  () => GetCredentialsRequest,
  () => GetCredentialsResponse
);
export var GetCustomDomainAssociation = op(
  n0,
  _GCDA,
  0,
  () => GetCustomDomainAssociationRequest,
  () => GetCustomDomainAssociationResponse
);
export var GetWorkgroup = op(
  n0,
  _GW,
  0,
  () => GetWorkgroupRequest,
  () => GetWorkgroupResponse
);
export var ListCustomDomainAssociations = op(
  n0,
  _LCDA,
  0,
  () => ListCustomDomainAssociationsRequest,
  () => ListCustomDomainAssociationsResponse
);
export var ListWorkgroups = op(
  n0,
  _LW,
  0,
  () => ListWorkgroupsRequest,
  () => ListWorkgroupsResponse
);
export var UpdateCustomDomainAssociation = op(
  n0,
  _UCDA,
  0,
  () => UpdateCustomDomainAssociationRequest,
  () => UpdateCustomDomainAssociationResponse
);
export var UpdateWorkgroup = op(
  n0,
  _UW,
  0,
  () => UpdateWorkgroupRequest,
  () => UpdateWorkgroupResponse
);
