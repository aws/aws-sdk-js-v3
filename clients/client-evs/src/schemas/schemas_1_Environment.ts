// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _AETV,
  _AETVR,
  _AETVRs,
  _aI,
  _aIs,
  _aZ,
  _C,
  _c,
  _cA,
  _cB,
  _CE,
  _CEH,
  _CEHR,
  _CEHRr,
  _CER,
  _CERr,
  _CI,
  _cI,
  _ci,
  _CL,
  _cl,
  _cr,
  _cT,
  _DE,
  _DEFV,
  _DEFVR,
  _DEFVRi,
  _DEH,
  _DEHR,
  _DEHRe,
  _DER,
  _DERe,
  _dHI,
  _E,
  _e,
  _EA,
  _eA,
  _eAi,
  _EAL,
  _eH,
  _eI,
  _eII,
  _eN,
  _er,
  _ES,
  _eS,
  _ESL,
  _eSn,
  _eSnv,
  _eSnvi,
  _eV,
  _eVn,
  _eVT,
  _eVx,
  _fL,
  _fN,
  _GE,
  _GER,
  _GERe,
  _H,
  _h,
  _hc,
  _hE,
  _hH,
  _HIFC,
  _HIFCL,
  _HL,
  _hN,
  _hNAI,
  _ho,
  _hQ,
  _hS,
  _iA,
  _iHP,
  _iP,
  _iS,
  _iT,
  _IV,
  _iV,
  _IVI,
  _kKI,
  _kN,
  _LE,
  _LEH,
  _LEHR,
  _LEHRi,
  _LER,
  _LERi,
  _LEV,
  _LEVR,
  _LEVRi,
  _LI,
  _lI,
  _LIL,
  _m,
  _mA,
  _mR,
  _n,
  _nAI,
  _nE,
  _nEs,
  _NI,
  _nI,
  _nII,
  _NIL,
  _nM,
  _nMs,
  _nMsx,
  _ns,
  _nT,
  _nU,
  _pGI,
  _pRSP,
  _r,
  _RA,
  _rAS,
  _re,
  _S,
  _s,
  _sA,
  _SASG,
  _sASG,
  _sASI,
  _sD,
  _sG,
  _sI,
  _sIu,
  _sK,
  _SL,
  _sM,
  _t,
  _tA,
  _ta,
  _TE,
  _V,
  _v,
  _vC,
  _VE,
  _VEF,
  _VEFL,
  _VH,
  _vH,
  _vI,
  _vIl,
  _vK,
  _VL,
  _vM,
  _vMm,
  _vMo,
  _vN,
  _vS,
  _vSl,
  _vT,
  _vV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateEipToVlanRequest = struct(n0, _AETVR, 0, [_cT, _eI, _vN, _aI], [[0, 4], 0, 0, 0]);
export var AssociateEipToVlanResponse = struct(n0, _AETVRs, 0, [_v], [() => Vlan]);
export var Check = struct(n0, _C, 0, [_t, _r, _iS], [0, 0, 4]);
export var ConnectivityInfo = struct(n0, _CI, 0, [_pRSP], [64 | 0]);
export var CreateEnvironmentHostRequest = struct(n0, _CEHR, 0, [_cT, _eI, _h], [[0, 4], 0, () => HostInfoForCreate]);
export var CreateEnvironmentHostResponse = struct(n0, _CEHRr, 0, [_eS, _h], [() => EnvironmentSummary, () => Host]);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_cT, _eN, _kKI, _ta, _sASG, _vI, _sASI, _vV, _tA, _lI, _iV, _ho, _cI, _vH, _sI],
  [
    [0, 4],
    0,
    0,
    128 | 0,
    () => ServiceAccessSecurityGroups,
    0,
    0,
    0,
    2,
    () => LicenseInfoList,
    () => InitialVlans,
    () => HostInfoForCreateList,
    () => ConnectivityInfo,
    () => VcfHostnames,
    0,
  ]
);
export var CreateEnvironmentResponse = struct(n0, _CERr, 0, [_e], [() => Environment]);
export var DeleteEnvironmentHostRequest = struct(n0, _DEHR, 0, [_cT, _eI, _hN], [[0, 4], 0, 0]);
export var DeleteEnvironmentHostResponse = struct(n0, _DEHRe, 0, [_eS, _h], [() => EnvironmentSummary, () => Host]);
export var DeleteEnvironmentRequest = struct(
  n0,
  _DER,
  0,
  [_cT, _eI],
  [
    [0, 4],
    [0, 1],
  ]
);
export var DeleteEnvironmentResponse = struct(n0, _DERe, 0, [_e], [() => Environment]);
export var DisassociateEipFromVlanRequest = struct(n0, _DEFVR, 0, [_cT, _eI, _vN, _aIs], [[0, 4], 0, 0, 0]);
export var DisassociateEipFromVlanResponse = struct(n0, _DEFVRi, 0, [_v], [() => Vlan]);
export var EipAssociation = struct(n0, _EA, 0, [_aIs, _aI, _iA], [0, 0, 0]);
export var Environment = struct(
  n0,
  _E,
  0,
  [_eI, _eSn, _sD, _cA, _mA, _eA, _eN, _vI, _sASI, _vV, _tA, _lI, _sI, _eSnv, _c, _cI, _vH, _kKI, _sASG, _cr],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    2,
    () => LicenseInfoList,
    0,
    0,
    () => ChecksList,
    () => ConnectivityInfo,
    () => VcfHostnames,
    0,
    () => ServiceAccessSecurityGroups,
    () => SecretList,
  ]
);
export var EnvironmentSummary = struct(
  n0,
  _ES,
  0,
  [_eI, _eN, _vV, _eSnv, _eSn, _cA, _mA, _eA],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var GetEnvironmentRequest = struct(n0, _GER, 0, [_eI], [[0, 1]]);
export var GetEnvironmentResponse = struct(n0, _GERe, 0, [_e], [() => Environment]);
export var Host = struct(
  n0,
  _H,
  0,
  [_hN, _iA, _kN, _iT, _pGI, _dHI, _cA, _mA, _hS, _sD, _eII, _nI],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, () => NetworkInterfaceList]
);
export var HostInfoForCreate = struct(n0, _HIFC, 0, [_hN, _kN, _iT, _pGI, _dHI], [0, 0, 0, 0, 0]);
export var InitialVlanInfo = struct(n0, _IVI, 0, [_ci], [0]);
export var InitialVlans = struct(
  n0,
  _IV,
  0,
  [_vM, _vMm, _vMo, _vS, _vT, _eVT, _nU, _hc, _eV, _eVx, _iHP, _hNAI],
  [
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    () => InitialVlanInfo,
    2,
    0,
  ]
);
export var LicenseInfo = struct(n0, _LI, 0, [_sK, _vK], [0, 0]);
export var ListEnvironmentHostsRequest = struct(
  n0,
  _LEHR,
  0,
  [_nT, _mR, _eI],
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
    [0, 1],
  ]
);
export var ListEnvironmentHostsResponse = struct(n0, _LEHRi, 0, [_nT, _eH], [0, () => HostList]);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_nT, _mR, _s],
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
    [
      64 | 0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var ListEnvironmentsResponse = struct(n0, _LERi, 0, [_nT, _eSnvi], [0, () => EnvironmentSummaryList]);
export var ListEnvironmentVlansRequest = struct(
  n0,
  _LEVR,
  0,
  [_nT, _mR, _eI],
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
    [0, 1],
  ]
);
export var ListEnvironmentVlansResponse = struct(n0, _LEVRi, 0, [_nT, _eVn], [0, () => VlanList]);
export var NetworkInterface = struct(n0, _NI, 0, [_nII], [0]);
export var Secret = struct(n0, _S, 0, [_sA], [0]);
export var ServiceAccessSecurityGroups = struct(n0, _SASG, 0, [_sG], [64 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_er]: _cl,
    [_hE]: 429,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m, _re, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var VcfHostnames = struct(
  n0,
  _VH,
  0,
  [_vC, _ns, _nM, _nMs, _nMsx, _nE, _nEs, _sM, _cB],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var Vlan = struct(
  n0,
  _V,
  0,
  [_vIl, _ci, _aZ, _fN, _sIu, _cA, _mA, _vSl, _sD, _eAi, _iP, _nAI],
  [1, 0, 0, 0, 0, 4, 4, 0, 0, () => EipAssociationList, 2, 0]
);
export var Unit = "unit" as const;

export var ChecksList = list(n0, _CL, 0, () => Check);
export var EipAssociationList = list(n0, _EAL, 0, () => EipAssociation);
export var EnvironmentStateList = 64 | 0;

export var EnvironmentSummaryList = list(n0, _ESL, 0, () => EnvironmentSummary);
export var HostInfoForCreateList = list(n0, _HIFCL, 0, () => HostInfoForCreate);
export var HostList = list(n0, _HL, 0, () => Host);
export var LicenseInfoList = list(n0, _LIL, 0, () => LicenseInfo);
export var NetworkInterfaceList = list(n0, _NIL, 0, () => NetworkInterface);
export var RouteServerPeeringList = 64 | 0;

export var SecretList = list(n0, _SL, 0, () => Secret);
export var SecurityGroups = 64 | 0;

export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var VlanList = list(n0, _VL, 0, () => Vlan);
export var AssociateEipToVlan = op(
  n0,
  _AETV,
  2,
  () => AssociateEipToVlanRequest,
  () => AssociateEipToVlanResponse
);
export var CreateEnvironment = op(
  n0,
  _CE,
  2,
  () => CreateEnvironmentRequest,
  () => CreateEnvironmentResponse
);
export var CreateEnvironmentHost = op(
  n0,
  _CEH,
  2,
  () => CreateEnvironmentHostRequest,
  () => CreateEnvironmentHostResponse
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  2,
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResponse
);
export var DeleteEnvironmentHost = op(
  n0,
  _DEH,
  2,
  () => DeleteEnvironmentHostRequest,
  () => DeleteEnvironmentHostResponse
);
export var DisassociateEipFromVlan = op(
  n0,
  _DEFV,
  2,
  () => DisassociateEipFromVlanRequest,
  () => DisassociateEipFromVlanResponse
);
export var GetEnvironment = op(
  n0,
  _GE,
  0,
  () => GetEnvironmentRequest,
  () => GetEnvironmentResponse
);
export var ListEnvironmentHosts = op(
  n0,
  _LEH,
  0,
  () => ListEnvironmentHostsRequest,
  () => ListEnvironmentHostsResponse
);
export var ListEnvironments = op(
  n0,
  _LE,
  0,
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResponse
);
export var ListEnvironmentVlans = op(
  n0,
  _LEV,
  0,
  () => ListEnvironmentVlansRequest,
  () => ListEnvironmentVlansResponse
);
