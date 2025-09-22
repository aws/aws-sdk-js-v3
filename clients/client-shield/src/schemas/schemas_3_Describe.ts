// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _AC,
  _ACt,
  _AD,
  _ADE,
  _AI,
  _AL,
  _AP,
  _API,
  _APL,
  _APt,
  _AR,
  _ASDI,
  _ASDL,
  _At,
  _AV,
  _Av,
  _AVS,
  _AVt,
  _BPS,
  _C,
  _c,
  _Cou,
  _DA,
  _DAR,
  _DARe,
  _DAS,
  _DASR,
  _DASRe,
  _DI,
  _DSe,
  _DSRes,
  _DSResc,
  _e,
  _ET,
  _I,
  _L,
  _Li,
  _M,
  _m,
  _Ma,
  _Mi,
  _ML,
  _MM,
  _MN,
  _MPG,
  _N,
  _N_,
  _PES,
  _PGAPL,
  _PGL,
  _PGPTL,
  _PL,
  _PPS,
  _PRTL,
  _PTL,
  _RAe,
  _RPS,
  _SA,
  _SAV,
  _SAVL,
  _SC,
  _SCL,
  _SL,
  _SR,
  _SRS,
  _SRSL,
  _ST,
  _Su,
  _Sum,
  _T,
  _TC,
  _TCIS,
  _TR,
  _Ty,
  _U,
  _V,
  _VC,
  _VT,
  n0,
} from "./schemas_0";
import { TimeRange } from "./schemas_6_Describe";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AttackDetail = struct(
  n0,
  _AD,
  0,
  [_AI, _RAe, _SR, _ST, _ET, _AC, _AP, _M],
  [0, 0, () => SubResourceSummaryList, 4, 4, () => SummarizedCounterList, () => AttackProperties, () => MitigationList]
);
export var AttackProperty = struct(n0, _APt, 0, [_AL, _API, _TC, _U, _T], [0, 0, () => TopContributors, 0, 1]);
export var AttackStatisticsDataItem = struct(n0, _ASDI, 0, [_AV, _ACt], [() => AttackVolume, 1]);
export var AttackVolume = struct(
  n0,
  _AV,
  0,
  [_BPS, _PPS, _RPS],
  [() => AttackVolumeStatistics, () => AttackVolumeStatistics, () => AttackVolumeStatistics]
);
export var AttackVolumeStatistics = struct(n0, _AVS, 0, [_Ma], [1]);
export var Contributor = struct(n0, _C, 0, [_N, _V], [0, 1]);
export var DescribeAttackRequest = struct(n0, _DAR, 0, [_AI], [0]);
export var DescribeAttackResponse = struct(n0, _DARe, 0, [_At], [() => AttackDetail]);
export var DescribeAttackStatisticsRequest = struct(n0, _DASR, 0, [], []);
export var DescribeAttackStatisticsResponse = struct(
  n0,
  _DASRe,
  0,
  [_TR, _DI],
  [() => TimeRange, () => AttackStatisticsDataList]
);
export var DescribeSubscriptionRequest = struct(n0, _DSRes, 0, [], []);
export var DescribeSubscriptionResponse = struct(n0, _DSResc, 0, [_Su], [() => Subscription]);
export var Limit = struct(n0, _L, 0, [_Ty, _Ma], [0, 1]);
export var Mitigation = struct(n0, _Mi, 0, [_MN], [0]);
export var ProtectionGroupArbitraryPatternLimits = struct(n0, _PGAPL, 0, [_MM], [1]);
export var ProtectionGroupLimits = struct(n0, _PGL, 0, [_MPG, _PTL], [1, () => ProtectionGroupPatternTypeLimits]);
export var ProtectionGroupPatternTypeLimits = struct(
  n0,
  _PGPTL,
  0,
  [_APL],
  [() => ProtectionGroupArbitraryPatternLimits]
);
export var ProtectionLimits = struct(n0, _PL, 0, [_PRTL], [() => Limits]);
export var SubResourceSummary = struct(
  n0,
  _SRS,
  0,
  [_Ty, _I, _AVt, _Cou],
  [0, 0, () => SummarizedAttackVectorList, () => SummarizedCounterList]
);
export var Subscription = struct(
  n0,
  _Su,
  0,
  [_ST, _ET, _TCIS, _AR, _Li, _PES, _SL, _SA],
  [4, 4, 1, 0, () => Limits, 0, () => SubscriptionLimits, 0]
);
export var SubscriptionLimits = struct(n0, _SL, 0, [_PL, _PGL], [() => ProtectionLimits, () => ProtectionGroupLimits]);
export var SummarizedAttackVector = struct(n0, _SAV, 0, [_VT, _VC], [0, () => SummarizedCounterList]);
export var SummarizedCounter = struct(n0, _SC, 0, [_N, _Ma, _Av, _Sum, _N_, _U], [0, 1, 1, 1, 1, 0]);
export var AttackProperties = list(n0, _AP, 0, () => AttackProperty);
export var AttackStatisticsDataList = list(n0, _ASDL, 0, () => AttackStatisticsDataItem);
export var Limits = list(n0, _Li, 0, () => Limit);
export var MitigationList = list(n0, _ML, 0, () => Mitigation);
export var SubResourceSummaryList = list(n0, _SRSL, 0, () => SubResourceSummary);
export var SummarizedAttackVectorList = list(n0, _SAVL, 0, () => SummarizedAttackVector);
export var SummarizedCounterList = list(n0, _SCL, 0, () => SummarizedCounter);
export var TopContributors = list(n0, _TC, 0, () => Contributor);
export var DescribeAttack = op(
  n0,
  _DA,
  0,
  () => DescribeAttackRequest,
  () => DescribeAttackResponse
);
export var DescribeAttackStatistics = op(
  n0,
  _DAS,
  0,
  () => DescribeAttackStatisticsRequest,
  () => DescribeAttackStatisticsResponse
);
export var DescribeSubscription = op(
  n0,
  _DSe,
  0,
  () => DescribeSubscriptionRequest,
  () => DescribeSubscriptionResponse
);
