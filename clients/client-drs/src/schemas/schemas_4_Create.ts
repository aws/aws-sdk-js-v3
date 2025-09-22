// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _ASNS,
  _ASNSR,
  _ASNSRs,
  _c,
  _CLCT,
  _CLCTR,
  _CLCTRr,
  _co,
  _cPI,
  _cSN,
  _cT,
  _dAN,
  _e,
  _eBA,
  _hE,
  _ht,
  _iD,
  _j,
  _l,
  _lCT,
  _lD,
  _lISI,
  _m,
  _pLE,
  _qC,
  _rI,
  _rIIDe,
  _rSID,
  _rT,
  _sC,
  _SFL,
  _SFLR,
  _SFLRt,
  _sNID,
  _sNo,
  _SQEE,
  _SR,
  _SRR,
  _SRRSS,
  _SRRSSt,
  _SRRt,
  _sSID,
  _SSNR,
  _SSNRR,
  _SSNRRNE,
  _SSNRRNEt,
  _SSNRRt,
  _sSo,
  _t,
  _tITRSM,
  _TRI,
  _TRIR,
  _TRIRe,
  n0,
  TagsMap,
} from "./schemas_0";
import { Job } from "./schemas_7_Launch";
import { LaunchConfigurationTemplate, Licensing } from "./schemas_11_LaunchConfiguration";
import { CfnStackName } from "./schemas_25_Source";

/* eslint no-var: 0 */

export var AssociateSourceNetworkStackRequest = struct(n0, _ASNSR, 0, [_sNID, _cSN], [0, [() => CfnStackName, 0]]);
export var AssociateSourceNetworkStackResponse = struct(n0, _ASNSRs, 0, [_j], [[() => Job, 0]]);
export var CreateLaunchConfigurationTemplateRequest = struct(
  n0,
  _CLCTR,
  0,
  [_t, _lD, _tITRSM, _cPI, _cT, _l, _eBA, _pLE, _lISI],
  [[() => TagsMap, 0], 0, 0, 2, 2, () => Licensing, 0, 2, 2]
);
export var CreateLaunchConfigurationTemplateResponse = struct(
  n0,
  _CLCTRr,
  0,
  [_lCT],
  [[() => LaunchConfigurationTemplate, 0]]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _co, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartFailbackLaunchRequest = struct(n0, _SFLR, 0, [_rIIDe, _t], [64 | 0, [() => TagsMap, 0]]);
export var StartFailbackLaunchResponse = struct(n0, _SFLRt, 0, [_j], [[() => Job, 0]]);
export var StartRecoveryRequest = struct(
  n0,
  _SRR,
  0,
  [_sSo, _iD, _t],
  [() => StartRecoveryRequestSourceServers, 2, [() => TagsMap, 0]]
);
export var StartRecoveryRequestSourceServer = struct(n0, _SRRSS, 0, [_sSID, _rSID], [0, 0]);
export var StartRecoveryResponse = struct(n0, _SRRt, 0, [_j], [[() => Job, 0]]);
export var StartSourceNetworkRecoveryRequest = struct(
  n0,
  _SSNRR,
  0,
  [_sNo, _dAN, _t],
  [[() => StartSourceNetworkRecoveryRequestNetworkEntries, 0], 2, [() => TagsMap, 0]]
);
export var StartSourceNetworkRecoveryRequestNetworkEntry = struct(
  n0,
  _SSNRRNE,
  0,
  [_sNID, _cSN],
  [0, [() => CfnStackName, 0]]
);
export var StartSourceNetworkRecoveryResponse = struct(n0, _SSNRRt, 0, [_j], [[() => Job, 0]]);
export var TerminateRecoveryInstancesRequest = struct(n0, _TRIR, 0, [_rIIDe], [64 | 0]);
export var TerminateRecoveryInstancesResponse = struct(n0, _TRIRe, 0, [_j], [[() => Job, 0]]);
export var RecoveryInstancesForTerminationRequest = 64 | 0;

export var StartFailbackRequestRecoveryInstanceIDs = 64 | 0;

export var StartRecoveryRequestSourceServers = list(n0, _SRRSSt, 0, () => StartRecoveryRequestSourceServer);
export var StartSourceNetworkRecoveryRequestNetworkEntries = list(n0, _SSNRRNEt, 0, [
  () => StartSourceNetworkRecoveryRequestNetworkEntry,
  0,
]);
export var AssociateSourceNetworkStack = op(
  n0,
  _ASNS,
  {
    [_ht]: ["POST", "/AssociateSourceNetworkStack", 202],
  },
  () => AssociateSourceNetworkStackRequest,
  () => AssociateSourceNetworkStackResponse
);
export var CreateLaunchConfigurationTemplate = op(
  n0,
  _CLCT,
  {
    [_ht]: ["POST", "/CreateLaunchConfigurationTemplate", 201],
  },
  () => CreateLaunchConfigurationTemplateRequest,
  () => CreateLaunchConfigurationTemplateResponse
);
export var StartFailbackLaunch = op(
  n0,
  _SFL,
  {
    [_ht]: ["POST", "/StartFailbackLaunch", 200],
  },
  () => StartFailbackLaunchRequest,
  () => StartFailbackLaunchResponse
);
export var StartRecovery = op(
  n0,
  _SR,
  {
    [_ht]: ["POST", "/StartRecovery", 202],
  },
  () => StartRecoveryRequest,
  () => StartRecoveryResponse
);
export var StartSourceNetworkRecovery = op(
  n0,
  _SSNR,
  {
    [_ht]: ["POST", "/StartSourceNetworkRecovery", 202],
  },
  () => StartSourceNetworkRecoveryRequest,
  () => StartSourceNetworkRecoveryResponse
);
export var TerminateRecoveryInstances = op(
  n0,
  _TRI,
  {
    [_ht]: ["POST", "/TerminateRecoveryInstances", 200],
  },
  () => TerminateRecoveryInstancesRequest,
  () => TerminateRecoveryInstancesResponse
);
