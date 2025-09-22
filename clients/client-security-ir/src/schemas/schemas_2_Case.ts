// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aIc,
  _aISD,
  _aIt,
  _aS,
  _b,
  _cA,
  _CAA,
  _cAa,
  _CAL,
  _CC,
  _cC,
  _CCR,
  _CCr,
  _CCRl,
  _CCRr,
  _CCRre,
  _CD,
  _cD,
  _cDl,
  _CEI,
  _CEIa,
  _cEO,
  _cI,
  _cIo,
  _cr,
  _cS,
  _CT,
  _cT,
  _cTu,
  _d,
  _em,
  _eT,
  _eTn,
  _fN,
  _GC,
  _GCR,
  _GCRe,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _i,
  _iA,
  _iAp,
  _IAR,
  _iAR,
  _IARL,
  _iARTA,
  _iARTD,
  _iATA,
  _iATD,
  _IPA,
  _iRT,
  _iS,
  _iSTA,
  _iSTD,
  _jT,
  _LC,
  _LCE,
  _LCER,
  _LCERi,
  _LCI,
  _LCi,
  _LCIi,
  _LCIis,
  _LCIist,
  _LCR,
  _LCRi,
  _LCRis,
  _LCRist,
  _lUB,
  _lUD,
  _m,
  _mA,
  _MAC,
  _mAC,
  _mAT,
  _mDT,
  _mI,
  _mN,
  _mR,
  _mS,
  _n,
  _nOAC,
  _nT,
  _oIF,
  _oU,
  _p,
  _pA,
  _PN,
  _r,
  _rISD,
  _rTe,
  _t,
  _ta,
  _TAI,
  _tAIA,
  _tAIATA,
  _tAIATD,
  _TAIL,
  _to,
  _uA,
  _UC,
  _UCR,
  _UCRp,
  _W,
  _w,
  _Wa,
  _wTA,
  _wTD,
  n0,
} from "./schemas_0";
import { CommentBody } from "./schemas_5_Comment";
import { EmailAddress, IncidentResponseTeam, JobTitle, MembershipName, OptInFeatures } from "./schemas_6_Membership";
import { FileName } from "./schemas_12_GetCase";

/* eslint no-var: 0 */

export var CaseDescription = sim(n0, _CD, 0, 8);
export var CaseTitle = sim(n0, _CT, 0, 8);
export var IPAddress = sim(n0, _IPA, 0, 8);
export var PersonName = sim(n0, _PN, 0, 8);
export var CaseAttachmentAttributes = struct(
  n0,
  _CAA,
  0,
  [_aIt, _fN, _aS, _cr, _cD],
  [0, [() => FileName, 0], 0, 0, 4]
);
export var CaseEditItem = struct(n0, _CEI, 0, [_eT, _p, _a, _m], [4, 0, 0, 0]);
export var CloseCaseRequest = struct(n0, _CCR, 0, [_cI], [[0, 1]]);
export var CloseCaseResponse = struct(n0, _CCRl, 0, [_cS, _cDl], [0, 4]);
export var CreateCaseRequest = struct(
  n0,
  _CCRr,
  0,
  [_cT, _rTe, _t, _d, _eTn, _rISD, _iA, _w, _tAIA, _iS, _iAR, _ta],
  [
    [0, 4],
    0,
    [() => CaseTitle, 0],
    [() => CaseDescription, 0],
    0,
    4,
    64 | 0,
    [() => Watchers, 0],
    [() => ThreatActorIpList, 0],
    64 | 0,
    () => ImpactedAwsRegionList,
    128 | 0,
  ]
);
export var CreateCaseResponse = struct(n0, _CCRre, 0, [_cI], [0]);
export var GetCaseRequest = struct(n0, _GCR, 0, [_cI], [[0, 1]]);
export var GetCaseResponse = struct(
  n0,
  _GCRe,
  0,
  [_t, _cA, _d, _cS, _eTn, _rISD, _aISD, _iAR, _tAIA, _pA, _iA, _w, _cD, _lUD, _cC, _rTe, _iS, _cAa, _cDl],
  [
    [() => CaseTitle, 0],
    0,
    [() => CaseDescription, 0],
    0,
    0,
    4,
    4,
    () => ImpactedAwsRegionList,
    [() => ThreatActorIpList, 0],
    0,
    64 | 0,
    [() => Watchers, 0],
    4,
    4,
    0,
    0,
    64 | 0,
    [() => CaseAttachmentsList, 0],
    4,
  ]
);
export var GetMembershipRequest = struct(n0, _GMR, 0, [_mI], [[0, 1]]);
export var GetMembershipResponse = struct(
  n0,
  _GMRe,
  0,
  [_mI, _aIc, _r, _mN, _mA, _mS, _mAT, _mDT, _cTu, _nOAC, _iRT, _oIF, _mAC],
  [
    0,
    0,
    0,
    [() => MembershipName, 0],
    0,
    0,
    4,
    4,
    0,
    1,
    [() => IncidentResponseTeam, 0],
    () => OptInFeatures,
    () => MembershipAccountsConfigurations,
  ]
);
export var ImpactedAwsRegion = struct(n0, _IAR, 0, [_r], [0]);
export var ListCaseEditsRequest = struct(n0, _LCER, 0, [_nT, _mR, _cI], [0, 1, [0, 1]]);
export var ListCaseEditsResponse = struct(n0, _LCERi, 0, [_nT, _i, _to], [0, () => CaseEditItems, 1]);
export var ListCasesItem = struct(
  n0,
  _LCI,
  0,
  [_cI, _lUD, _t, _cA, _eTn, _cS, _cD, _cDl, _rTe, _pA],
  [0, 4, [() => CaseTitle, 0], 0, 0, 0, 4, 4, 0, 0]
);
export var ListCasesRequest = struct(n0, _LCR, 0, [_nT, _mR], [0, 1]);
export var ListCasesResponse = struct(n0, _LCRi, 0, [_nT, _i, _to], [0, [() => ListCasesItems, 0], 1]);
export var ListCommentsItem = struct(
  n0,
  _LCIi,
  0,
  [_cIo, _cD, _lUD, _cr, _lUB, _b],
  [0, 4, 4, 0, 0, [() => CommentBody, 0]]
);
export var ListCommentsRequest = struct(n0, _LCRis, 0, [_nT, _mR, _cI], [0, 1, [0, 1]]);
export var ListCommentsResponse = struct(n0, _LCRist, 0, [_nT, _i, _to], [0, [() => ListCommentsItems, 0], 1]);
export var MembershipAccountsConfigurations = struct(n0, _MAC, 0, [_cEO, _oU], [2, 64 | 0]);
export var ThreatActorIp = struct(n0, _TAI, 0, [_iAp, _uA], [[() => IPAddress, 0], 0]);
export var UpdateCaseRequest = struct(
  n0,
  _UCR,
  0,
  [_cI, _t, _d, _rISD, _aISD, _eTn, _wTA, _wTD, _tAIATA, _tAIATD, _iSTA, _iSTD, _iARTA, _iARTD, _iATA, _iATD],
  [
    [0, 1],
    [() => CaseTitle, 0],
    [() => CaseDescription, 0],
    4,
    4,
    0,
    [() => Watchers, 0],
    [() => Watchers, 0],
    [() => ThreatActorIpList, 0],
    [() => ThreatActorIpList, 0],
    64 | 0,
    64 | 0,
    () => ImpactedAwsRegionList,
    () => ImpactedAwsRegionList,
    64 | 0,
    64 | 0,
  ]
);
export var UpdateCaseResponse = struct(n0, _UCRp, 0, [], []);
export var Watcher = struct(
  n0,
  _W,
  0,
  [_em, _n, _jT],
  [
    [() => EmailAddress, 0],
    [() => PersonName, 0],
    [() => JobTitle, 0],
  ]
);
export var CaseAttachmentsList = list(n0, _CAL, 0, [() => CaseAttachmentAttributes, 0]);
export var CaseEditItems = list(n0, _CEIa, 0, () => CaseEditItem);
export var ImpactedAccounts = 64 | 0;

export var ImpactedAwsRegionList = list(n0, _IARL, 0, () => ImpactedAwsRegion);
export var ImpactedServicesList = 64 | 0;

export var ListCasesItems = list(n0, _LCIis, 0, [() => ListCasesItem, 0]);
export var ListCommentsItems = list(n0, _LCIist, 0, [() => ListCommentsItem, 0]);
export var ThreatActorIpList = list(n0, _TAIL, 0, [() => ThreatActorIp, 0]);
export var Watchers = list(n0, _Wa, 0, [() => Watcher, 0]);
export var CloseCase = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/close-case", 200],
  },
  () => CloseCaseRequest,
  () => CloseCaseResponse
);
export var CreateCase = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/v1/create-case", 201],
  },
  () => CreateCaseRequest,
  () => CreateCaseResponse
);
export var GetCase = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/v1/cases/{caseId}/get-case", 200],
  },
  () => GetCaseRequest,
  () => GetCaseResponse
);
export var GetMembership = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/v1/membership/{membershipId}", 200],
  },
  () => GetMembershipRequest,
  () => GetMembershipResponse
);
export var ListCaseEdits = op(
  n0,
  _LCE,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/list-case-edits", 200],
  },
  () => ListCaseEditsRequest,
  () => ListCaseEditsResponse
);
export var ListCases = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/v1/list-cases", 200],
  },
  () => ListCasesRequest,
  () => ListCasesResponse
);
export var ListComments = op(
  n0,
  _LCi,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/list-comments", 200],
  },
  () => ListCommentsRequest,
  () => ListCommentsResponse
);
export var UpdateCase = op(
  n0,
  _UC,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/update-case", 200],
  },
  () => UpdateCaseRequest,
  () => UpdateCaseResponse
);
