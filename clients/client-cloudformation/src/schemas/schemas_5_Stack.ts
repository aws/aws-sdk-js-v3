// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _ACT,
  _Acti,
  _At,
  _AVf,
  _BC,
  _BV,
  _C,
  _Ca,
  _CE,
  _Ch,
  _CSh,
  _CSI,
  _CSN,
  _CT,
  _D,
  _DCSe,
  _DCSIe,
  _DCSOe,
  _De,
  _Det,
  _DRe,
  _En,
  _ES,
  _Ev,
  _HIC,
  _IER,
  _INS,
  _IPV,
  _K,
  _LRI,
  _LRSR,
  _LRSRI,
  _LRSRO,
  _LSRA,
  _LSRAI,
  _LSRAO,
  _MI,
  _MR,
  _MTIM,
  _N,
  _NARN,
  _NT,
  _OSF,
  _P,
  _PA,
  _Pat,
  _PCSI,
  _PRI,
  _R,
  _RC,
  _RCD,
  _RCDe,
  _RCo,
  _RCSI,
  _Rep,
  _RI,
  _RMes,
  _RReq,
  _RSI,
  _RT,
  _RTDe,
  _RTo,
  _RTol,
  _RTP,
  _S,
  _Sco,
  _SI,
  _SN,
  _SR,
  _SRA,
  _SRAt,
  _SRca,
  _SRI,
  _SRTR,
  _T,
  _Ta,
  _Tag,
  _Tar,
  _TK,
  _TR,
  _TV,
  _UR,
  _V,
  n0,
} from "./schemas_0";
import { ResourceMapping } from "./schemas_2_Stack";
import { ScannedResource } from "./schemas_3_Resource";
import { ModuleInfo } from "./schemas_4_Stack";
import { _Parameters } from "./schemas_16_Stack";

/* eslint no-var: 0 */

export var Change = struct(n0, _C, 0, [_T, _HIC, _RC], [0, 1, () => ResourceChange]);
export var DescribeChangeSetInput = struct(n0, _DCSIe, 0, [_CSN, _SN, _NT, _IPV], [0, 0, 0, 2]);
export var DescribeChangeSetOutput = struct(
  n0,
  _DCSOe,
  0,
  [_CSN, _CSI, _SI, _SN, _D, _P, _CT, _ES, _S, _SR, _NARN, _RCo, _Ca, _Ta, _Ch, _NT, _INS, _PCSI, _RCSI, _OSF, _IER],
  [
    0,
    0,
    0,
    0,
    0,
    () => _Parameters,
    4,
    0,
    0,
    0,
    64 | 0,
    () => RollbackConfiguration,
    64 | 0,
    () => Tags,
    () => Changes,
    0,
    2,
    0,
    0,
    0,
    2,
  ]
);
export var ListResourceScanResourcesInput = struct(
  n0,
  _LRSRI,
  0,
  [_RSI, _RI, _RTP, _TK, _TV, _NT, _MR],
  [0, 0, 0, 0, 0, 0, 1]
);
export var ListResourceScanResourcesOutput = struct(n0, _LRSRO, 0, [_R, _NT], [() => ScannedResources, 0]);
export var ListStackRefactorActionsInput = struct(n0, _LSRAI, 0, [_SRI, _NT, _MR], [0, 0, 1]);
export var ListStackRefactorActionsOutput = struct(n0, _LSRAO, 0, [_SRA, _NT], [() => StackRefactorActions, 0]);
export var ResourceChange = struct(
  n0,
  _RC,
  0,
  [_PA, _Acti, _LRI, _PRI, _RT, _Rep, _Sco, _De, _CSI, _MI, _BC, _AC],
  [0, 0, 0, 0, 0, 0, 64 | 0, () => ResourceChangeDetails, 0, () => ModuleInfo, 0, 0]
);
export var ResourceChangeDetail = struct(
  n0,
  _RCD,
  0,
  [_Tar, _Ev, _CSh, _CE],
  [() => ResourceTargetDefinition, 0, 0, 0]
);
export var ResourceTargetDefinition = struct(
  n0,
  _RTDe,
  0,
  [_At, _N, _RReq, _Pat, _BV, _AVf, _ACT],
  [0, 0, 0, 0, 0, 0, 0]
);
export var RollbackConfiguration = struct(n0, _RCo, 0, [_RTo, _MTIM], [() => RollbackTriggers, 1]);
export var RollbackTrigger = struct(n0, _RTol, 0, [_A, _T], [0, 0]);
export var StackRefactorAction = struct(
  n0,
  _SRAt,
  0,
  [_Acti, _En, _PRI, _RI, _D, _Det, _DRe, _TR, _UR, _RMes],
  [0, 0, 0, 0, 0, 0, 0, () => StackRefactorTagResources, 64 | 0, () => ResourceMapping]
);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var Changes = list(n0, _Ch, 0, () => Change);
export var NotificationARNs = 64 | 0;

export var ResourceChangeDetails = list(n0, _RCDe, 0, () => ResourceChangeDetail);
export var RollbackTriggers = list(n0, _RTo, 0, () => RollbackTrigger);
export var ScannedResources = list(n0, _SRca, 0, () => ScannedResource);
export var Scope = 64 | 0;

export var StackRefactorActions = list(n0, _SRA, 0, () => StackRefactorAction);
export var StackRefactorTagResources = list(n0, _SRTR, 0, () => Tag);
export var StackRefactorUntagResources = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
export var DescribeChangeSet = op(
  n0,
  _DCSe,
  0,
  () => DescribeChangeSetInput,
  () => DescribeChangeSetOutput
);
export var ListResourceScanResources = op(
  n0,
  _LRSR,
  0,
  () => ListResourceScanResourcesInput,
  () => ListResourceScanResourcesOutput
);
export var ListStackRefactorActions = op(
  n0,
  _LSRA,
  0,
  () => ListStackRefactorActionsInput,
  () => ListStackRefactorActionsOutput
);
