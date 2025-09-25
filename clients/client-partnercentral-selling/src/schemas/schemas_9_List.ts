// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAIOAL,
  _AAL,
  _Ar,
  _C,
  _CA,
  _Ca,
  _CB,
  _CD,
  _ECB,
  _ED,
  _EI,
  _EIn,
  _EIS,
  _EISn,
  _ESL,
  _ESn,
  _ESng,
  _ET,
  _h,
  _I,
  _ID,
  _Id,
  _LE,
  _LEI,
  _LEIR,
  _LEIRi,
  _LER,
  _LERi,
  _LS,
  _LSR,
  _LSRi,
  _MC,
  _MR,
  _N,
  _NT,
  _OEIS,
  _PT,
  _PTa,
  _Re,
  _SAAI,
  _SB,
  _SBo,
  _SCN,
  _SL,
  _SO,
  _Sor,
  _SS,
  _SSo,
  _St,
  _T,
  n0,
} from "./schemas_0";
import { Receiver } from "./schemas_15_Engagement";
import { AwsAccount } from "./schemas_18_Engagement";

/* eslint no-var: 0 */

export var EngagementInvitationSummary = struct(
  n0,
  _EIS,
  0,
  [_Ar, _PT, _Id, _EIn, _ET, _St, _ID, _ED, _SAAI, _SCN, _Re, _C, _PTa],
  [0, 0, 0, 0, 0, 0, 5, 5, [() => AwsAccount, 0], 0, [() => Receiver, 0], 0, 0]
);
export var EngagementSort = struct(n0, _ESn, 0, [_SO, _SB], [0, 0]);
export var EngagementSummary = struct(
  n0,
  _ESng,
  0,
  [_Ar, _Id, _T, _CA, _CB, _MC],
  [0, 0, 0, 5, [() => AwsAccount, 0], 1]
);
export var ListEngagementInvitationsRequest = struct(
  n0,
  _LEIR,
  0,
  [_C, _MR, _NT, _Sor, _PT, _PTa, _St, _EI, _SAAI],
  [0, 1, 0, () => OpportunityEngagementInvitationSort, 64 | 0, 0, 64 | 0, 64 | 0, [() => AwsAccountIdOrAliasList, 0]]
);
export var ListEngagementInvitationsResponse = struct(
  n0,
  _LEIRi,
  0,
  [_EISn, _NT],
  [[() => EngagementInvitationSummaries, 0], 0]
);
export var ListEngagementsRequest = struct(
  n0,
  _LER,
  0,
  [_C, _CB, _ECB, _Sor, _MR, _NT, _EI],
  [0, [() => AwsAccountList, 0], [() => AwsAccountList, 0], () => EngagementSort, 1, 0, 64 | 0]
);
export var ListEngagementsResponse = struct(n0, _LERi, 0, [_ESL, _NT], [[() => EngagementSummaryList, 0], 0]);
export var ListSolutionsRequest = struct(
  n0,
  _LSR,
  0,
  [_C, _MR, _NT, _Sor, _St, _I, _Ca],
  [0, 1, 0, () => SolutionSort, 64 | 0, 64 | 0, 64 | 0]
);
export var ListSolutionsResponse = struct(n0, _LSRi, 0, [_SS, _NT], [() => SolutionList, 0]);
export var OpportunityEngagementInvitationSort = struct(n0, _OEIS, 0, [_SO, _SB], [0, 0]);
export var SolutionBase = struct(n0, _SBo, 0, [_C, _Id, _Ar, _N, _St, _Ca, _CD], [0, 0, 0, 0, 0, 0, 5]);
export var SolutionSort = struct(n0, _SSo, 0, [_SO, _SB], [0, 0]);
export var AwsAccountIdOrAliasList = list(n0, _AAIOAL, 0, [() => AwsAccount, 0]);
export var AwsAccountList = list(n0, _AAL, 0, [() => AwsAccount, 0]);
export var EngagementIdentifiers = 64 | 0;

export var EngagementInvitationsPayloadType = 64 | 0;

export var EngagementInvitationSummaries = list(n0, _EISn, 0, [() => EngagementInvitationSummary, 0]);
export var EngagementSummaryList = list(n0, _ESL, 0, [() => EngagementSummary, 0]);
export var FilterStatus = 64 | 0;

export var InvitationStatusList = 64 | 0;

export var SolutionList = list(n0, _SL, 0, () => SolutionBase);
export var StringList = 64 | 0;

export var ListEngagementInvitations = op(
  n0,
  _LEI,
  {
    [_h]: ["POST", "/ListEngagementInvitations", 200],
  },
  () => ListEngagementInvitationsRequest,
  () => ListEngagementInvitationsResponse
);
export var ListEngagements = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/ListEngagements", 200],
  },
  () => ListEngagementsRequest,
  () => ListEngagementsResponse
);
export var ListSolutions = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/ListSolutions", 200],
  },
  () => ListSolutionsRequest,
  () => ListSolutionsResponse
);
