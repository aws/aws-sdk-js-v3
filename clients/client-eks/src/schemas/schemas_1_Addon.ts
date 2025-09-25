// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aA,
  _ad,
  _add,
  _AH,
  _AId,
  _AIL,
  _aN,
  _ANCR,
  _ANCRd,
  _APIA,
  _APIAL,
  _aV,
  _CA,
  _cA,
  _CAR,
  _CARr,
  _cN,
  _co,
  _cRT,
  _cV,
  _DA,
  _DAe,
  _DAR,
  _DARe,
  _DARes,
  _DAResc,
  _h,
  _hQ,
  _ht,
  _i,
  _LA,
  _LAR,
  _LARi,
  _m,
  _mA,
  _mI,
  _mR,
  _nam,
  _nC,
  _nT,
  _o,
  _p,
  _pIA,
  _pre,
  _rA,
  _rCe,
  _rI,
  _s,
  _sA,
  _sARA,
  _t,
  n0,
} from "./schemas_0";
import { MarketplaceInformation } from "./schemas_23_Addon";

/* eslint no-var: 0 */

export var Addon = struct(
  n0,
  _A,
  0,
  [_aN, _cN, _s, _aV, _h, _aA, _cA, _mA, _sARA, _t, _p, _o, _mI, _cV, _pIA, _nC],
  [
    0,
    0,
    0,
    0,
    () => AddonHealth,
    0,
    4,
    4,
    0,
    128 | 0,
    0,
    0,
    () => MarketplaceInformation,
    0,
    64 | 0,
    () => AddonNamespaceConfigResponse,
  ]
);
export var AddonHealth = struct(n0, _AH, 0, [_i], [() => AddonIssueList]);
export var AddonIssue = struct(n0, _AId, 0, [_co, _m, _rI], [0, 0, 64 | 0]);
export var AddonNamespaceConfigRequest = struct(n0, _ANCR, 0, [_nam], [0]);
export var AddonNamespaceConfigResponse = struct(n0, _ANCRd, 0, [_nam], [0]);
export var AddonPodIdentityAssociations = struct(n0, _APIA, 0, [_sA, _rA], [0, 0]);
export var CreateAddonRequest = struct(
  n0,
  _CAR,
  0,
  [_cN, _aN, _aV, _sARA, _rCe, _cRT, _t, _cV, _pIA, _nC],
  [[0, 1], 0, 0, 0, 0, [0, 4], 128 | 0, 0, () => AddonPodIdentityAssociationsList, () => AddonNamespaceConfigRequest]
);
export var CreateAddonResponse = struct(n0, _CARr, 0, [_ad], [() => Addon]);
export var DeleteAddonRequest = struct(
  n0,
  _DAR,
  0,
  [_cN, _aN, _pre],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _pre,
      },
    ],
  ]
);
export var DeleteAddonResponse = struct(n0, _DARe, 0, [_ad], [() => Addon]);
export var DescribeAddonRequest = struct(
  n0,
  _DARes,
  0,
  [_cN, _aN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAddonResponse = struct(n0, _DAResc, 0, [_ad], [() => Addon]);
export var ListAddonsRequest = struct(
  n0,
  _LAR,
  0,
  [_cN, _mR, _nT],
  [
    [0, 1],
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
export var ListAddonsResponse = struct(n0, _LARi, 0, [_add, _nT], [64 | 0, 0]);
export var AddonIssueList = list(n0, _AIL, 0, () => AddonIssue);
export var AddonPodIdentityAssociationsList = list(n0, _APIAL, 0, () => AddonPodIdentityAssociations);
export var CreateAddon = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/addons", 200],
  },
  () => CreateAddonRequest,
  () => CreateAddonResponse
);
export var DeleteAddon = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/addons/{addonName}", 200],
  },
  () => DeleteAddonRequest,
  () => DeleteAddonResponse
);
export var DescribeAddon = op(
  n0,
  _DAe,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/addons/{addonName}", 200],
  },
  () => DescribeAddonRequest,
  () => DescribeAddonResponse
);
export var ListAddons = op(
  n0,
  _LA,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/addons", 200],
  },
  () => ListAddonsRequest,
  () => ListAddonsResponse
);
