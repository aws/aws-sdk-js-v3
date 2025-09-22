// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aC,
  _AP,
  _API,
  _Ar,
  _ASP,
  _At,
  _AVC,
  _b,
  _BAP,
  _BP,
  _BRS,
  _CB,
  _cP,
  _CPS,
  _CPSI,
  _CT,
  _D,
  _Da,
  _DEBe,
  _DEBRe,
  _DEBRes,
  _DLC,
  _DR,
  _DRes,
  _DRi,
  _DRR,
  _DRResc,
  _DRRescr,
  _DRRi,
  _DU,
  _EBN,
  _ECr,
  _EEC,
  _EECSMT,
  _EM,
  _EP,
  _EPc,
  _ER,
  _ERR,
  _ex,
  _F,
  _f,
  _FE,
  _FEC,
  _G,
  _GQLO,
  _HP,
  _HPt,
  _I,
  _Id,
  _In,
  _IP,
  _IPM,
  _IT,
  _ITn,
  _JD,
  _JN,
  _K,
  _KKI,
  _KP,
  _L,
  _LC,
  _LMT,
  _LRi,
  _LRNBT,
  _LRNBTR,
  _LRNBTRi,
  _LRRis,
  _LRRist,
  _LT,
  _LTBR,
  _LTBRR,
  _LTBRRi,
  _MB,
  _MEAIS,
  _MGI,
  _MRA,
  _N,
  _NC,
  _NP,
  _NT,
  _PC,
  _PCl,
  _PKP,
  _Po,
  _PPL,
  _PPV,
  _PR,
  _PRR,
  _PRRu,
  _PS,
  _PSl,
  _PT,
  _PTR,
  _PTRE,
  _PTREL,
  _PTRu,
  _PTu,
  _PV,
  _QSP,
  _RAo,
  _RAu,
  _RCP,
  _RCT,
  _RCTu,
  _RDP,
  _RI,
  _RNu,
  _RPe,
  _RRL,
  _RS,
  _RT,
  _RTR,
  _RTRE,
  _RTRe,
  _RTREL,
  _Ru,
  _Rul,
  _S,
  _SE,
  _SG,
  _Si,
  _SMA,
  _SMPP,
  _SMPPa,
  _SMPPL,
  _SN,
  _SP,
  _Sq,
  _St,
  _Su,
  _t,
  _TA,
  _Ta,
  _Tar,
  _Targ,
  _TC,
  _TDA,
  _TI,
  _TLa,
  _V,
  _Va,
  _w,
  _WE,
  n0,
  Unit,
} from "./schemas_0";
import { LogConfig } from "./schemas_4_Describe";
import { TagList } from "./schemas_12_Resource";
import { DeadLetterConfig } from "./schemas_13_Bus";

/* eslint no-var: 0 */

export var GraphQLOperation = sim(n0, _GQLO, 0, 8);
export var Sql = sim(n0, _S, 0, 8);
export var AppSyncParameters = struct(n0, _ASP, 0, [_GQLO], [[() => GraphQLOperation, 0]]);
export var AwsVpcConfiguration = struct(n0, _AVC, 0, [_Su, _SG, _API], [64 | 0, 64 | 0, 0]);
export var BatchArrayProperties = struct(n0, _BAP, 0, [_Si], [1]);
export var BatchParameters = struct(
  n0,
  _BP,
  0,
  [_JD, _JN, _AP, _RS],
  [0, 0, () => BatchArrayProperties, () => BatchRetryStrategy]
);
export var BatchRetryStrategy = struct(n0, _BRS, 0, [_At], [1]);
export var CapacityProviderStrategyItem = struct(n0, _CPSI, 0, [_cP, _w, _b], [0, 1, 1]);
export var DeleteRuleRequest = struct(n0, _DRR, 0, [_N, _EBN, _F], [0, 0, 2]);
export var DescribeEventBusRequest = struct(n0, _DEBRe, 0, [_N], [0]);
export var DescribeEventBusResponse = struct(
  n0,
  _DEBRes,
  0,
  [_N, _Ar, _D, _KKI, _DLC, _Po, _LC, _CT, _LMT],
  [0, 0, 0, 0, () => DeadLetterConfig, 0, () => LogConfig, 4, 4]
);
export var DescribeRuleRequest = struct(n0, _DRResc, 0, [_N, _EBN], [0, 0]);
export var DescribeRuleResponse = struct(
  n0,
  _DRRescr,
  0,
  [_N, _Ar, _EP, _SE, _St, _D, _RAo, _MB, _EBN, _CB],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var DisableRuleRequest = struct(n0, _DRRi, 0, [_N, _EBN], [0, 0]);
export var EcsParameters = struct(
  n0,
  _EPc,
  0,
  [_TDA, _TC, _LT, _NC, _PV, _G, _CPS, _EECSMT, _EEC, _PC, _PS, _PT, _RI, _Ta],
  [
    0,
    1,
    0,
    () => NetworkConfiguration,
    0,
    0,
    () => CapacityProviderStrategy,
    2,
    2,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    0,
    () => TagList,
  ]
);
export var EnableRuleRequest = struct(n0, _ERR, 0, [_N, _EBN], [0, 0]);
export var HttpParameters = struct(n0, _HPt, 0, [_PPV, _HP, _QSP], [64 | 0, 128 | 0, 128 | 0]);
export var InputTransformer = struct(n0, _IT, 0, [_IPM, _ITn], [128 | 0, 0]);
export var KinesisParameters = struct(n0, _KP, 0, [_PKP], [0]);
export var ListRuleNamesByTargetRequest = struct(n0, _LRNBTR, 0, [_TA, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListRuleNamesByTargetResponse = struct(n0, _LRNBTRi, 0, [_RNu, _NT], [64 | 0, 0]);
export var ListRulesRequest = struct(n0, _LRRis, 0, [_NP, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListRulesResponse = struct(n0, _LRRist, 0, [_Ru, _NT], [() => RuleResponseList, 0]);
export var ListTargetsByRuleRequest = struct(n0, _LTBRR, 0, [_Rul, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListTargetsByRuleResponse = struct(n0, _LTBRRi, 0, [_Tar, _NT], [[() => TargetList, 0], 0]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_aC], [() => AwsVpcConfiguration]);
export var PlacementConstraint = struct(n0, _PCl, 0, [_t, _ex], [0, 0]);
export var PlacementStrategy = struct(n0, _PS, 0, [_t, _f], [0, 0]);
export var PutRuleRequest = struct(
  n0,
  _PRR,
  0,
  [_N, _SE, _EP, _St, _D, _RAo, _Ta, _EBN],
  [0, 0, 0, 0, 0, 0, () => TagList, 0]
);
export var PutRuleResponse = struct(n0, _PRRu, 0, [_RAu], [0]);
export var PutTargetsRequest = struct(n0, _PTR, 0, [_Rul, _EBN, _Tar], [0, 0, [() => TargetList, 0]]);
export var PutTargetsResponse = struct(n0, _PTRu, 0, [_FEC, _FE], [1, () => PutTargetsResultEntryList]);
export var PutTargetsResultEntry = struct(n0, _PTRE, 0, [_TI, _ECr, _EM], [0, 0, 0]);
export var RedshiftDataParameters = struct(
  n0,
  _RDP,
  0,
  [_SMA, _Da, _DU, _S, _SN, _WE, _Sq],
  [0, 0, 0, [() => Sql, 0], 0, 2, [() => Sqls, 0]]
);
export var RemoveTargetsRequest = struct(n0, _RTR, 0, [_Rul, _EBN, _I, _F], [0, 0, 64 | 0, 2]);
export var RemoveTargetsResponse = struct(n0, _RTRe, 0, [_FEC, _FE], [1, () => RemoveTargetsResultEntryList]);
export var RemoveTargetsResultEntry = struct(n0, _RTRE, 0, [_TI, _ECr, _EM], [0, 0, 0]);
export var RetryPolicy = struct(n0, _RPe, 0, [_MRA, _MEAIS], [1, 1]);
export var Rule = struct(n0, _Rul, 0, [_N, _Ar, _EP, _St, _D, _SE, _RAo, _MB, _EBN], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
export var RunCommandParameters = struct(n0, _RCP, 0, [_RCT], [() => RunCommandTargets]);
export var RunCommandTarget = struct(n0, _RCTu, 0, [_K, _Va], [0, 64 | 0]);
export var SageMakerPipelineParameter = struct(n0, _SMPP, 0, [_N, _V], [0, 0]);
export var SageMakerPipelineParameters = struct(n0, _SMPPa, 0, [_PPL], [() => SageMakerPipelineParameterList]);
export var SqsParameters = struct(n0, _SP, 0, [_MGI], [0]);
export var Target = struct(
  n0,
  _Targ,
  0,
  [_Id, _Ar, _RAo, _In, _IP, _IT, _KP, _RCP, _EPc, _BP, _SP, _HPt, _RDP, _SMPPa, _DLC, _RPe, _ASP],
  [
    0,
    0,
    0,
    0,
    0,
    () => InputTransformer,
    () => KinesisParameters,
    () => RunCommandParameters,
    () => EcsParameters,
    () => BatchParameters,
    () => SqsParameters,
    () => HttpParameters,
    [() => RedshiftDataParameters, 0],
    () => SageMakerPipelineParameters,
    () => DeadLetterConfig,
    () => RetryPolicy,
    [() => AppSyncParameters, 0],
  ]
);
export var CapacityProviderStrategy = list(n0, _CPS, 0, () => CapacityProviderStrategyItem);
export var PathParameterList = 64 | 0;

export var PlacementConstraints = list(n0, _PC, 0, () => PlacementConstraint);
export var PlacementStrategies = list(n0, _PSl, 0, () => PlacementStrategy);
export var PutTargetsResultEntryList = list(n0, _PTREL, 0, () => PutTargetsResultEntry);
export var RemoveTargetsResultEntryList = list(n0, _RTREL, 0, () => RemoveTargetsResultEntry);
export var RuleNameList = 64 | 0;

export var RuleResponseList = list(n0, _RRL, 0, () => Rule);
export var RunCommandTargets = list(n0, _RCT, 0, () => RunCommandTarget);
export var RunCommandTargetValues = 64 | 0;

export var SageMakerPipelineParameterList = list(n0, _SMPPL, 0, () => SageMakerPipelineParameter);
export var Sqls = list(n0, _Sq, 8, [() => Sql, 0]);
export var StringList = 64 | 0;

export var TargetIdList = 64 | 0;

export var TargetList = list(n0, _TLa, 0, [() => Target, 0]);
export var HeaderParametersMap = 128 | 0;

export var QueryStringParametersMap = 128 | 0;

export var TransformerPaths = 128 | 0;

export var DeleteRule = op(
  n0,
  _DR,
  0,
  () => DeleteRuleRequest,
  () => Unit
);
export var DescribeEventBus = op(
  n0,
  _DEBe,
  0,
  () => DescribeEventBusRequest,
  () => DescribeEventBusResponse
);
export var DescribeRule = op(
  n0,
  _DRes,
  0,
  () => DescribeRuleRequest,
  () => DescribeRuleResponse
);
export var DisableRule = op(
  n0,
  _DRi,
  0,
  () => DisableRuleRequest,
  () => Unit
);
export var EnableRule = op(
  n0,
  _ER,
  0,
  () => EnableRuleRequest,
  () => Unit
);
export var ListRuleNamesByTarget = op(
  n0,
  _LRNBT,
  0,
  () => ListRuleNamesByTargetRequest,
  () => ListRuleNamesByTargetResponse
);
export var ListRules = op(
  n0,
  _LRi,
  0,
  () => ListRulesRequest,
  () => ListRulesResponse
);
export var ListTargetsByRule = op(
  n0,
  _LTBR,
  0,
  () => ListTargetsByRuleRequest,
  () => ListTargetsByRuleResponse
);
export var PutRule = op(
  n0,
  _PR,
  0,
  () => PutRuleRequest,
  () => PutRuleResponse
);
export var PutTargets = op(
  n0,
  _PTu,
  0,
  () => PutTargetsRequest,
  () => PutTargetsResponse
);
export var RemoveTargets = op(
  n0,
  _RT,
  0,
  () => RemoveTargetsRequest,
  () => RemoveTargetsResponse
);
