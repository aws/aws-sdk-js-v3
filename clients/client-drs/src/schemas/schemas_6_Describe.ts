// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _Ac,
  _acc,
  _aIc,
  _aID,
  _DLCTe,
  _DLCTRes,
  _DLCTResc,
  _f,
  _h,
  _hQ,
  _ht,
  _i,
  _LAa,
  _LARF,
  _LCTa,
  _lCTIDa,
  _LESS,
  _LESSR,
  _LESSRi,
  _LLA,
  _LLAR,
  _LLARi,
  _LSA,
  _LSAR,
  _LSARi,
  _mR,
  _nT,
  _rI,
  _sAIDt,
  _SSS,
  _SSSL,
  _t,
  n0,
  TagsMap,
} from "./schemas_0";
import { LaunchAction } from "./schemas_7_Launch";
import { LaunchConfigurationTemplate } from "./schemas_11_LaunchConfiguration";

/* eslint no-var: 0 */

export var Account = struct(n0, _A, 0, [_aID], [0]);
export var DescribeLaunchConfigurationTemplatesRequest = struct(n0, _DLCTRes, 0, [_lCTIDa, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeLaunchConfigurationTemplatesResponse = struct(
  n0,
  _DLCTResc,
  0,
  [_i, _nT],
  [[() => LaunchConfigurationTemplates, 0], 0]
);
export var LaunchActionsRequestFilters = struct(n0, _LARF, 0, [_aIc], [64 | 0]);
export var ListExtensibleSourceServersRequest = struct(n0, _LESSR, 0, [_sAIDt, _mR, _nT], [0, 1, 0]);
export var ListExtensibleSourceServersResponse = struct(
  n0,
  _LESSRi,
  0,
  [_i, _nT],
  [[() => StagingSourceServersList, 0], 0]
);
export var ListLaunchActionsRequest = struct(
  n0,
  _LLAR,
  0,
  [_rI, _f, _mR, _nT],
  [0, () => LaunchActionsRequestFilters, 1, 0]
);
export var ListLaunchActionsResponse = struct(n0, _LLARi, 0, [_i, _nT], [() => LaunchActions, 0]);
export var ListStagingAccountsRequest = struct(
  n0,
  _LSAR,
  0,
  [_mR, _nT],
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
export var ListStagingAccountsResponse = struct(n0, _LSARi, 0, [_acc, _nT], [() => Accounts, 0]);
export var StagingSourceServer = struct(n0, _SSS, 0, [_h, _a, _t], [0, 0, [() => TagsMap, 0]]);
export var Accounts = list(n0, _Ac, 0, () => Account);
export var LaunchActionIds = 64 | 0;

export var LaunchActions = list(n0, _LAa, 0, () => LaunchAction);
export var LaunchConfigurationTemplateIDs = 64 | 0;

export var LaunchConfigurationTemplates = list(n0, _LCTa, 0, [() => LaunchConfigurationTemplate, 0]);
export var StagingSourceServersList = list(n0, _SSSL, 0, [() => StagingSourceServer, 0]);
export var DescribeLaunchConfigurationTemplates = op(
  n0,
  _DLCTe,
  {
    [_ht]: ["POST", "/DescribeLaunchConfigurationTemplates", 200],
  },
  () => DescribeLaunchConfigurationTemplatesRequest,
  () => DescribeLaunchConfigurationTemplatesResponse
);
export var ListExtensibleSourceServers = op(
  n0,
  _LESS,
  {
    [_ht]: ["POST", "/ListExtensibleSourceServers", 200],
  },
  () => ListExtensibleSourceServersRequest,
  () => ListExtensibleSourceServersResponse
);
export var ListLaunchActions = op(
  n0,
  _LLA,
  {
    [_ht]: ["POST", "/ListLaunchActions", 200],
  },
  () => ListLaunchActionsRequest,
  () => ListLaunchActionsResponse
);
export var ListStagingAccounts = op(
  n0,
  _LSA,
  {
    [_ht]: ["GET", "/ListStagingAccounts", 200],
  },
  () => ListStagingAccountsRequest,
  () => ListStagingAccountsResponse
);
