// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AD,
  _ADA,
  _ADp,
  _ADRL,
  _ADS,
  _AN,
  _Ar,
  _Arc,
  _ARL,
  _AT,
  _CA,
  _CB,
  _Co,
  _Con,
  _CRL,
  _CS,
  _CT,
  _D,
  _EB,
  _EBL,
  _EBN,
  _EBv,
  _EC,
  _EET,
  _ELRT,
  _EP,
  _ES,
  _ESA,
  _ESL,
  _ESN,
  _EST,
  _ESv,
  _ET,
  _HM,
  _IE,
  _IRLPS,
  _L,
  _LA,
  _LAD,
  _LADR,
  _LADRi,
  _LAR,
  _LARi,
  _LAT,
  _LC,
  _LCR,
  _LCRi,
  _LEB,
  _LEBR,
  _LEBRi,
  _LES,
  _LESR,
  _LESRi,
  _LMT,
  _LPES,
  _LPESA,
  _LPESAR,
  _LPESARi,
  _LPESR,
  _LPESRi,
  _LR,
  _LRi,
  _LRNBT,
  _LRNBTR,
  _LRNBTRi,
  _LRR,
  _LRRi,
  _LRRis,
  _LRRist,
  _LTBR,
  _LTBRR,
  _LTBRRi,
  _MB,
  _N,
  _NP,
  _NT,
  _PES,
  _PESA,
  _PESa,
  _PESAa,
  _PESAL,
  _PESL,
  _Po,
  _R,
  _RAo,
  _RD,
  _Rep,
  _RET,
  _RL,
  _RN,
  _RNu,
  _RRL,
  _RST,
  _Ru,
  _Rul,
  _S,
  _SB,
  _SE,
  _SR,
  _TA,
  _Tar,
  n0,
} from "./schemas_0";
import { TargetList } from "./schemas_2_List";

/* eslint no-var: 0 */

export var ApiDestination = struct(
  n0,
  _AD,
  0,
  [_ADA, _N, _ADS, _CA, _IE, _HM, _IRLPS, _CT, _LMT],
  [0, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var Archive = struct(n0, _A, 0, [_AN, _ESA, _S, _SR, _RD, _SB, _EC, _CT], [0, 0, 0, 0, 1, 1, 1, 4]);
export var Connection = struct(n0, _Co, 0, [_CA, _N, _CS, _SR, _AT, _CT, _LMT, _LAT], [0, 0, 0, 0, 0, 4, 4, 4]);
export var EventBus = struct(n0, _EB, 0, [_N, _Ar, _Po], [0, 0, 0]);
export var EventSource = struct(n0, _ES, 0, [_Ar, _CB, _CT, _ET, _N, _S], [0, 0, 4, 4, 0, 0]);
export var ListApiDestinationsRequest = struct(n0, _LADR, 0, [_NP, _CA, _NT, _L], [0, 0, 0, 1]);
export var ListApiDestinationsResponse = struct(n0, _LADRi, 0, [_ADp, _NT], [() => ApiDestinationResponseList, 0]);
export var ListArchivesRequest = struct(n0, _LAR, 0, [_NP, _ESA, _S, _NT, _L], [0, 0, 0, 0, 1]);
export var ListArchivesResponse = struct(n0, _LARi, 0, [_Arc, _NT], [() => ArchiveResponseList, 0]);
export var ListConnectionsRequest = struct(n0, _LCR, 0, [_NP, _CS, _NT, _L], [0, 0, 0, 1]);
export var ListConnectionsResponse = struct(n0, _LCRi, 0, [_Con, _NT], [() => ConnectionResponseList, 0]);
export var ListEventBusesRequest = struct(n0, _LEBR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListEventBusesResponse = struct(n0, _LEBRi, 0, [_EBv, _NT], [() => EventBusList, 0]);
export var ListEventSourcesRequest = struct(n0, _LESR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListEventSourcesResponse = struct(n0, _LESRi, 0, [_ESv, _NT], [() => EventSourceList, 0]);
export var ListPartnerEventSourceAccountsRequest = struct(n0, _LPESAR, 0, [_ESN, _NT, _L], [0, 0, 1]);
export var ListPartnerEventSourceAccountsResponse = struct(
  n0,
  _LPESARi,
  0,
  [_PESA, _NT],
  [() => PartnerEventSourceAccountList, 0]
);
export var ListPartnerEventSourcesRequest = struct(n0, _LPESR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListPartnerEventSourcesResponse = struct(n0, _LPESRi, 0, [_PES, _NT], [() => PartnerEventSourceList, 0]);
export var ListReplaysRequest = struct(n0, _LRR, 0, [_NP, _S, _ESA, _NT, _L], [0, 0, 0, 0, 1]);
export var ListReplaysResponse = struct(n0, _LRRi, 0, [_R, _NT], [() => ReplayList, 0]);
export var ListRuleNamesByTargetRequest = struct(n0, _LRNBTR, 0, [_TA, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListRuleNamesByTargetResponse = struct(n0, _LRNBTRi, 0, [_RNu, _NT], [64 | 0, 0]);
export var ListRulesRequest = struct(n0, _LRRis, 0, [_NP, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListRulesResponse = struct(n0, _LRRist, 0, [_Ru, _NT], [() => RuleResponseList, 0]);
export var ListTargetsByRuleRequest = struct(n0, _LTBRR, 0, [_Rul, _EBN, _NT, _L], [0, 0, 0, 1]);
export var ListTargetsByRuleResponse = struct(n0, _LTBRRi, 0, [_Tar, _NT], [() => TargetList, 0]);
export var PartnerEventSource = struct(n0, _PESa, 0, [_Ar, _N], [0, 0]);
export var PartnerEventSourceAccount = struct(n0, _PESAa, 0, [_Ac, _CT, _ET, _S], [0, 4, 4, 0]);
export var Replay = struct(
  n0,
  _Rep,
  0,
  [_RN, _ESA, _S, _SR, _EST, _EET, _ELRT, _RST, _RET],
  [0, 0, 0, 0, 4, 4, 4, 4, 4]
);
export var Rule = struct(n0, _Rul, 0, [_N, _Ar, _EP, _S, _D, _SE, _RAo, _MB, _EBN], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
export var ApiDestinationResponseList = list(n0, _ADRL, 0, () => ApiDestination);
export var ArchiveResponseList = list(n0, _ARL, 0, () => Archive);
export var ConnectionResponseList = list(n0, _CRL, 0, () => Connection);
export var EventBusList = list(n0, _EBL, 0, () => EventBus);
export var EventSourceList = list(n0, _ESL, 0, () => EventSource);
export var PartnerEventSourceAccountList = list(n0, _PESAL, 0, () => PartnerEventSourceAccount);
export var PartnerEventSourceList = list(n0, _PESL, 0, () => PartnerEventSource);
export var ReplayList = list(n0, _RL, 0, () => Replay);
export var RuleNameList = 64 | 0;

export var RuleResponseList = list(n0, _RRL, 0, () => Rule);
export var ListApiDestinations = op(
  n0,
  _LAD,
  0,
  () => ListApiDestinationsRequest,
  () => ListApiDestinationsResponse
);
export var ListArchives = op(
  n0,
  _LA,
  0,
  () => ListArchivesRequest,
  () => ListArchivesResponse
);
export var ListConnections = op(
  n0,
  _LC,
  0,
  () => ListConnectionsRequest,
  () => ListConnectionsResponse
);
export var ListEventBuses = op(
  n0,
  _LEB,
  0,
  () => ListEventBusesRequest,
  () => ListEventBusesResponse
);
export var ListEventSources = op(
  n0,
  _LES,
  0,
  () => ListEventSourcesRequest,
  () => ListEventSourcesResponse
);
export var ListPartnerEventSourceAccounts = op(
  n0,
  _LPESA,
  0,
  () => ListPartnerEventSourceAccountsRequest,
  () => ListPartnerEventSourceAccountsResponse
);
export var ListPartnerEventSources = op(
  n0,
  _LPES,
  0,
  () => ListPartnerEventSourcesRequest,
  () => ListPartnerEventSourcesResponse
);
export var ListReplays = op(
  n0,
  _LR,
  0,
  () => ListReplaysRequest,
  () => ListReplaysResponse
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
