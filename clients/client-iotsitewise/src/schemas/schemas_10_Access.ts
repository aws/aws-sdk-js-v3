// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _Al,
  _ala,
  _aPA,
  _aPCD,
  _aPI,
  _aPIc,
  _aPLUD,
  _aPP,
  _aPR,
  _APS,
  _aPS,
  _APSc,
  _ar,
  _aRA,
  _cD,
  _cT,
  _d,
  _da,
  _DAPe,
  _DAPRes,
  _DAPResc,
  _DPes,
  _DPRes,
  _DPResc,
  _E,
  _end,
  _fi,
  _GI,
  _gr,
  _hQ,
  _ht,
  _I,
  _i,
  _iA,
  _IAMRI,
  _IAMUI,
  _id,
  _IF,
  _iI,
  _IL,
  _Im,
  _iR,
  _iTd,
  _iU,
  _LAP,
  _LAPR,
  _LAPRi,
  _LP,
  _LPR,
  _LPRi,
  _lUD,
  _mR,
  _n,
  _nLA,
  _nSE,
  _nT,
  _p,
  _pAM,
  _pAo,
  _pCD,
  _pCE,
  _pCI,
  _pD,
  _pIo,
  _pLI,
  _pLIL,
  _pLUD,
  _pN,
  _po,
  _PR,
  _pro,
  _PRr,
  _pS,
  _PSo,
  _pSo,
  _PSor,
  _pSU,
  _pT,
  _PTC,
  _pTC,
  _PTE,
  _pTo,
  _r,
  _rAo,
  _Re,
  _rI,
  _rTes,
  _sta,
  _sU,
  _ty,
  _UAP,
  _UAPR,
  _UAPRp,
  _UI,
  _UP,
  _UPR,
  _UPRp,
  _ur,
  _us,
  n0,
} from "./schemas_0";
import { PortalStatus } from "./schemas_11_Portal";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var AccessPolicySummary = struct(
  n0,
  _APS,
  0,
  [_i, _id, _r, _p, _cD, _lUD],
  [0, () => Identity, () => Resource, 0, 4, 4]
);
export var Alarms = struct(n0, _Al, 0, [_aRA, _nLA], [0, 0]);
export var DescribeAccessPolicyRequest = struct(n0, _DAPRes, 0, [_aPIc], [[0, 1]]);
export var DescribeAccessPolicyResponse = struct(
  n0,
  _DAPResc,
  0,
  [_aPIc, _aPA, _aPI, _aPR, _aPP, _aPCD, _aPLUD],
  [0, 0, () => Identity, () => Resource, 0, 4, 4]
);
export var DescribePortalRequest = struct(n0, _DPRes, 0, [_pIo], [[0, 1]]);
export var DescribePortalResponse = struct(
  n0,
  _DPResc,
  0,
  [_pIo, _pAo, _pN, _pD, _pCI, _pSU, _pCE, _pS, _pCD, _pLUD, _pLIL, _rAo, _pAM, _nSE, _ala, _pT, _pTC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => Email, 0],
    () => PortalStatus,
    4,
    4,
    () => ImageLocation,
    0,
    0,
    [() => Email, 0],
    () => Alarms,
    0,
    () => PortalTypeConfiguration,
  ]
);
export var GroupIdentity = struct(n0, _GI, 0, [_i], [0]);
export var IAMRoleIdentity = struct(n0, _IAMRI, 0, [_ar], [0]);
export var IAMUserIdentity = struct(n0, _IAMUI, 0, [_ar], [0]);
export var Identity = struct(
  n0,
  _I,
  0,
  [_us, _gr, _iU, _iR],
  [() => UserIdentity, () => GroupIdentity, () => IAMUserIdentity, () => IAMRoleIdentity]
);
export var Image = struct(n0, _Im, 0, [_i, _fi], [0, () => ImageFile]);
export var ImageFile = struct(n0, _IF, 0, [_da, _ty], [21, 0]);
export var ImageLocation = struct(n0, _IL, 0, [_i, _ur], [0, 0]);
export var ListAccessPoliciesRequest = struct(
  n0,
  _LAPR,
  0,
  [_iTd, _iI, _rTes, _rI, _iA, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _iTd,
      },
    ],
    [
      0,
      {
        [_hQ]: _iI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTes,
      },
    ],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [
      0,
      {
        [_hQ]: _iA,
      },
    ],
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
  ]
);
export var ListAccessPoliciesResponse = struct(n0, _LAPRi, 0, [_aPS, _nT], [() => AccessPolicySummaries, 0]);
export var ListPortalsRequest = struct(
  n0,
  _LPR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListPortalsResponse = struct(n0, _LPRi, 0, [_pSo, _nT], [() => PortalSummaries, 0]);
export var PortalResource = struct(n0, _PR, 0, [_i], [0]);
export var PortalSummary = struct(
  n0,
  _PSo,
  0,
  [_i, _n, _d, _sU, _cD, _lUD, _rAo, _sta, _pT],
  [0, 0, 0, 0, 4, 4, 0, () => PortalStatus, 0]
);
export var PortalTypeEntry = struct(n0, _PTE, 0, [_pTo], [64 | 0]);
export var ProjectResource = struct(n0, _PRr, 0, [_i], [0]);
export var Resource = struct(n0, _Re, 0, [_po, _pro], [() => PortalResource, () => ProjectResource]);
export var UpdateAccessPolicyRequest = struct(
  n0,
  _UAPR,
  0,
  [_aPIc, _aPI, _aPR, _aPP, _cT],
  [[0, 1], () => Identity, () => Resource, 0, [0, 4]]
);
export var UpdateAccessPolicyResponse = struct(n0, _UAPRp, 0, [], []);
export var UpdatePortalRequest = struct(
  n0,
  _UPR,
  0,
  [_pIo, _pN, _pD, _pCE, _pLI, _rAo, _cT, _nSE, _ala, _pT, _pTC],
  [
    [0, 1],
    0,
    0,
    [() => Email, 0],
    () => Image,
    0,
    [0, 4],
    [() => Email, 0],
    () => Alarms,
    0,
    () => PortalTypeConfiguration,
  ]
);
export var UpdatePortalResponse = struct(n0, _UPRp, 0, [_pS], [() => PortalStatus]);
export var UserIdentity = struct(n0, _UI, 0, [_i], [0]);
export var AccessPolicySummaries = list(n0, _APSc, 0, () => AccessPolicySummary);
export var PortalSummaries = list(n0, _PSor, 0, () => PortalSummary);
export var PortalTools = 64 | 0;

export var PortalTypeConfiguration = map(n0, _PTC, 0, 0, () => PortalTypeEntry);
export var DescribeAccessPolicy = op(
  n0,
  _DAPe,
  {
    [_ht]: ["GET", "/access-policies/{accessPolicyId}", 200],
    [_end]: ["monitor."],
  },
  () => DescribeAccessPolicyRequest,
  () => DescribeAccessPolicyResponse
);
export var DescribePortal = op(
  n0,
  _DPes,
  {
    [_ht]: ["GET", "/portals/{portalId}", 200],
    [_end]: ["monitor."],
  },
  () => DescribePortalRequest,
  () => DescribePortalResponse
);
export var ListAccessPolicies = op(
  n0,
  _LAP,
  {
    [_ht]: ["GET", "/access-policies", 200],
    [_end]: ["monitor."],
  },
  () => ListAccessPoliciesRequest,
  () => ListAccessPoliciesResponse
);
export var ListPortals = op(
  n0,
  _LP,
  {
    [_ht]: ["GET", "/portals", 200],
    [_end]: ["monitor."],
  },
  () => ListPortalsRequest,
  () => ListPortalsResponse
);
export var UpdateAccessPolicy = op(
  n0,
  _UAP,
  {
    [_ht]: ["PUT", "/access-policies/{accessPolicyId}", 200],
    [_end]: ["monitor."],
  },
  () => UpdateAccessPolicyRequest,
  () => UpdateAccessPolicyResponse
);
export var UpdatePortal = op(
  n0,
  _UP,
  {
    [_ht]: ["PUT", "/portals/{portalId}", 202],
    [_end]: ["monitor."],
  },
  () => UpdatePortalRequest,
  () => UpdatePortalResponse
);
