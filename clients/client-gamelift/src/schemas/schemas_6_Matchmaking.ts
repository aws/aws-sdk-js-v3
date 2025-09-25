// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _AMI,
  _AMO,
  _APC,
  _AR,
  _AT,
  _ATS,
  _AV,
  _BM,
  _CAonf,
  _CED,
  _CMC,
  _CMCI,
  _CMCO,
  _CMRS,
  _CMRSI,
  _CMRSO,
  _CNon,
  _Conf,
  _Confi,
  _CT,
  _D,
  _DM,
  _DMCe,
  _DMCIe,
  _DMCOe,
  _DMI,
  _DMO,
  _DMRSe,
  _DMRSIe,
  _DMRSOe,
  _DN,
  _ET,
  _EWT,
  _FMM,
  _GP,
  _GSA,
  _GSCI,
  _GSDa,
  _GSQA,
  _IA,
  _Li,
  _LIM,
  _MC,
  _MCL,
  _MPS,
  _MPSa,
  _MPSL,
  _MRS,
  _MRSL,
  _MT,
  _MTL,
  _N,
  _N_,
  _Na,
  _NT,
  _NTe,
  _PA,
  _PAM,
  _PI,
  _PIFAM,
  _PIl,
  _Pl,
  _Pla,
  _PLla,
  _Po,
  _PSI,
  _RSA,
  _RSB,
  _RSN,
  _RSu,
  _RSul,
  _RTS,
  _S,
  _SDM,
  _SL,
  _SM,
  _SMB,
  _SMBI,
  _SMBO,
  _SMI,
  _SMIt,
  _SMO,
  _SMOt,
  _SMt,
  _SMto,
  _SR,
  _St,
  _STt,
  _Ta,
  _Te,
  _TI,
  _TIi,
  _TL,
  _UMC,
  _UMCI,
  _UMCO,
  IpAddress,
  n0,
  TagList,
} from "./schemas_0";
import { PlayerId } from "./schemas_7_Session";
import { GamePropertyList } from "./schemas_13_Game";

/* eslint no-var: 0 */

export var AcceptMatchInput = struct(n0, _AMI, 0, [_TI, _PIl, _AT], [0, [() => PlayerIdsForAcceptMatch, 0], 0]);
export var AcceptMatchOutput = struct(n0, _AMO, 0, [], []);
export var AttributeValue = struct(n0, _AV, 0, [_S, _N_, _SL, _SDM], [0, 1, 64 | 0, 128 | 1]);
export var CreateMatchmakingConfigurationInput = struct(
  n0,
  _CMCI,
  0,
  [_N, _D, _GSQA, _RTS, _ATS, _AR, _RSN, _NT, _APC, _CED, _GP, _GSDa, _BM, _FMM, _Ta],
  [0, 0, 64 | 0, 1, 1, 2, 0, 0, 1, 0, () => GamePropertyList, 0, 0, 0, () => TagList]
);
export var CreateMatchmakingConfigurationOutput = struct(n0, _CMCO, 0, [_Conf], [() => MatchmakingConfiguration]);
export var CreateMatchmakingRuleSetInput = struct(n0, _CMRSI, 0, [_N, _RSB, _Ta], [0, 0, () => TagList]);
export var CreateMatchmakingRuleSetOutput = struct(n0, _CMRSO, 0, [_RSu], [() => MatchmakingRuleSet]);
export var DescribeMatchmakingConfigurationsInput = struct(n0, _DMCIe, 0, [_Na, _RSN, _Li, _NTe], [64 | 0, 0, 1, 0]);
export var DescribeMatchmakingConfigurationsOutput = struct(
  n0,
  _DMCOe,
  0,
  [_Confi, _NTe],
  [() => MatchmakingConfigurationList, 0]
);
export var DescribeMatchmakingInput = struct(n0, _DMI, 0, [_TIi], [64 | 0]);
export var DescribeMatchmakingOutput = struct(n0, _DMO, 0, [_TL], [[() => MatchmakingTicketList, 0]]);
export var DescribeMatchmakingRuleSetsInput = struct(n0, _DMRSIe, 0, [_Na, _Li, _NTe], [64 | 0, 1, 0]);
export var DescribeMatchmakingRuleSetsOutput = struct(n0, _DMRSOe, 0, [_RSul, _NTe], [() => MatchmakingRuleSetList, 0]);
export var GameSessionConnectionInfo = struct(
  n0,
  _GSCI,
  0,
  [_GSA, _IA, _DN, _Po, _MPS],
  [0, [() => IpAddress, 0], 0, 1, [() => MatchedPlayerSessionList, 0]]
);
export var MatchedPlayerSession = struct(n0, _MPSa, 0, [_PI, _PSI], [[() => PlayerId, 0], 0]);
export var MatchmakingConfiguration = struct(
  n0,
  _MC,
  0,
  [_N, _CAonf, _D, _GSQA, _RTS, _ATS, _AR, _RSN, _RSA, _NT, _APC, _CED, _CT, _GP, _GSDa, _BM, _FMM],
  [0, 0, 0, 64 | 0, 1, 1, 2, 0, 0, 0, 1, 0, 4, () => GamePropertyList, 0, 0, 0]
);
export var MatchmakingRuleSet = struct(n0, _MRS, 0, [_RSN, _RSA, _RSB, _CT], [0, 0, 0, 4]);
export var MatchmakingTicket = struct(
  n0,
  _MT,
  0,
  [_TI, _CNon, _CAonf, _St, _SR, _SM, _STt, _ET, _Pl, _GSCI, _EWT],
  [0, 0, 0, 0, 0, 0, 4, 4, [() => PlayerList, 0], [() => GameSessionConnectionInfo, 0], 1]
);
export var Player = struct(
  n0,
  _Pla,
  0,
  [_PI, _PA, _Te, _LIM],
  [[() => PlayerId, 0], () => PlayerAttributeMap, 0, 128 | 1]
);
export var StartMatchBackfillInput = struct(n0, _SMBI, 0, [_TI, _CNon, _GSA, _Pl], [0, 0, 0, [() => PlayerList, 0]]);
export var StartMatchBackfillOutput = struct(n0, _SMBO, 0, [_MT], [[() => MatchmakingTicket, 0]]);
export var StartMatchmakingInput = struct(n0, _SMI, 0, [_TI, _CNon, _Pl], [0, 0, [() => PlayerList, 0]]);
export var StartMatchmakingOutput = struct(n0, _SMO, 0, [_MT], [[() => MatchmakingTicket, 0]]);
export var StopMatchmakingInput = struct(n0, _SMIt, 0, [_TI], [0]);
export var StopMatchmakingOutput = struct(n0, _SMOt, 0, [], []);
export var UpdateMatchmakingConfigurationInput = struct(
  n0,
  _UMCI,
  0,
  [_N, _D, _GSQA, _RTS, _ATS, _AR, _RSN, _NT, _APC, _CED, _GP, _GSDa, _BM, _FMM],
  [0, 0, 64 | 0, 1, 1, 2, 0, 0, 1, 0, () => GamePropertyList, 0, 0, 0]
);
export var UpdateMatchmakingConfigurationOutput = struct(n0, _UMCO, 0, [_Conf], [() => MatchmakingConfiguration]);
export var MatchedPlayerSessionList = list(n0, _MPSL, 0, [() => MatchedPlayerSession, 0]);
export var MatchmakingConfigurationList = list(n0, _MCL, 0, () => MatchmakingConfiguration);
export var MatchmakingConfigurationNameList = 64 | 0;

export var MatchmakingIdList = 64 | 0;

export var MatchmakingRuleSetList = list(n0, _MRSL, 0, () => MatchmakingRuleSet);
export var MatchmakingRuleSetNameList = 64 | 0;

export var MatchmakingTicketList = list(n0, _MTL, 0, [() => MatchmakingTicket, 0]);
export var PlayerAttributeStringList = 64 | 0;

export var PlayerIdsForAcceptMatch = list(n0, _PIFAM, 8, [() => PlayerId, 0]);
export var PlayerList = list(n0, _PLla, 0, [() => Player, 0]);
export var QueueArnsList = 64 | 0;

export var LatencyMap = 128 | 1;

export var PlayerAttributeMap = map(n0, _PAM, 0, 0, () => AttributeValue);
export var PlayerAttributeStringDoubleMap = 128 | 1;

export var AcceptMatch = op(
  n0,
  _AM,
  0,
  () => AcceptMatchInput,
  () => AcceptMatchOutput
);
export var CreateMatchmakingConfiguration = op(
  n0,
  _CMC,
  0,
  () => CreateMatchmakingConfigurationInput,
  () => CreateMatchmakingConfigurationOutput
);
export var CreateMatchmakingRuleSet = op(
  n0,
  _CMRS,
  0,
  () => CreateMatchmakingRuleSetInput,
  () => CreateMatchmakingRuleSetOutput
);
export var DescribeMatchmaking = op(
  n0,
  _DM,
  0,
  () => DescribeMatchmakingInput,
  () => DescribeMatchmakingOutput
);
export var DescribeMatchmakingConfigurations = op(
  n0,
  _DMCe,
  0,
  () => DescribeMatchmakingConfigurationsInput,
  () => DescribeMatchmakingConfigurationsOutput
);
export var DescribeMatchmakingRuleSets = op(
  n0,
  _DMRSe,
  0,
  () => DescribeMatchmakingRuleSetsInput,
  () => DescribeMatchmakingRuleSetsOutput
);
export var StartMatchBackfill = op(
  n0,
  _SMB,
  0,
  () => StartMatchBackfillInput,
  () => StartMatchBackfillOutput
);
export var StartMatchmaking = op(
  n0,
  _SMt,
  0,
  () => StartMatchmakingInput,
  () => StartMatchmakingOutput
);
export var StopMatchmaking = op(
  n0,
  _SMto,
  0,
  () => StopMatchmakingInput,
  () => StopMatchmakingOutput
);
export var UpdateMatchmakingConfiguration = op(
  n0,
  _UMC,
  0,
  () => UpdateMatchmakingConfigurationInput,
  () => UpdateMatchmakingConfigurationOutput
);
