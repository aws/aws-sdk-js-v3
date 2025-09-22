// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aPA,
  _CNS,
  _CNSR,
  _CNSRr,
  _cT,
  _GNS,
  _GNSR,
  _GNSRe,
  _h,
  _hQ,
  _LNS,
  _LNSR,
  _LNSRi,
  _mR,
  _NS,
  _nS,
  _nSA,
  _NSL,
  _NSS,
  _nT,
  _sGI,
  _sI,
  _ta,
  _UNS,
  _UNSR,
  _UNSRp,
  _vI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var CreateNetworkSettingsRequest = struct(
  n0,
  _CNSR,
  0,
  [_vI, _sI, _sGI, _ta, _cT],
  [0, 64 | 0, 64 | 0, [() => TagList, 0], [0, 4]]
);
export var CreateNetworkSettingsResponse = struct(n0, _CNSRr, 0, [_nSA], [0]);
export var GetNetworkSettingsRequest = struct(n0, _GNSR, 0, [_nSA], [[0, 1]]);
export var GetNetworkSettingsResponse = struct(n0, _GNSRe, 0, [_nS], [() => NetworkSettings]);
export var ListNetworkSettingsRequest = struct(
  n0,
  _LNSR,
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
export var ListNetworkSettingsResponse = struct(n0, _LNSRi, 0, [_nS, _nT], [() => NetworkSettingsList, 0]);
export var NetworkSettings = struct(n0, _NS, 0, [_nSA, _aPA, _vI, _sI, _sGI], [0, 64 | 0, 0, 64 | 0, 64 | 0]);
export var NetworkSettingsSummary = struct(n0, _NSS, 0, [_nSA, _vI], [0, 0]);
export var UpdateNetworkSettingsRequest = struct(
  n0,
  _UNSR,
  0,
  [_nSA, _vI, _sI, _sGI, _cT],
  [[0, 1], 0, 64 | 0, 64 | 0, [0, 4]]
);
export var UpdateNetworkSettingsResponse = struct(n0, _UNSRp, 0, [_nS], [() => NetworkSettings]);
export var NetworkSettingsList = list(n0, _NSL, 0, () => NetworkSettingsSummary);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var CreateNetworkSettings = op(
  n0,
  _CNS,
  {
    [_h]: ["POST", "/networkSettings", 200],
  },
  () => CreateNetworkSettingsRequest,
  () => CreateNetworkSettingsResponse
);
export var GetNetworkSettings = op(
  n0,
  _GNS,
  {
    [_h]: ["GET", "/networkSettings/{networkSettingsArn+}", 200],
  },
  () => GetNetworkSettingsRequest,
  () => GetNetworkSettingsResponse
);
export var ListNetworkSettings = op(
  n0,
  _LNS,
  {
    [_h]: ["GET", "/networkSettings", 200],
  },
  () => ListNetworkSettingsRequest,
  () => ListNetworkSettingsResponse
);
export var UpdateNetworkSettings = op(
  n0,
  _UNS,
  {
    [_h]: ["PATCH", "/networkSettings/{networkSettingsArn+}", 200],
  },
  () => UpdateNetworkSettingsRequest,
  () => UpdateNetworkSettingsResponse
);
