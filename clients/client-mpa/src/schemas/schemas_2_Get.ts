// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _ACS,
  _AI,
  _AN,
  _APU,
  _AR,
  _Ar,
  _AS,
  _ASR,
  _AT,
  _ATA,
  _ATN,
  _CAT,
  _CATR,
  _CATRr,
  _CIS,
  _CISR,
  _CISRr,
  _CT,
  _CTo,
  _CTr,
  _D,
  _DCT,
  _Do,
  _DST,
  _ES,
  _ET,
  _F,
  _Fi,
  _FN,
  _GAT,
  _GATR,
  _GATRA,
  _GATRAe,
  _GATRe,
  _GIS,
  _GISR,
  _GISRe,
  _GPV,
  _GPVR,
  _GPVRe,
  _GS,
  _GSR,
  _GSRAR,
  _GSRARe,
  _GSRe,
  _h,
  _hQ,
  _IA,
  _ID,
  _II,
  _IIC,
  _IICFG,
  _IICFL,
  _IS,
  _ISA,
  _ISFL,
  _ISP,
  _ISPFG,
  _ISPFL,
  _IST,
  _IT,
  _LAT,
  _LATR,
  _LATRAT,
  _LATRATi,
  _LATRi,
  _LIS,
  _LISR,
  _LISRi,
  _LPV,
  _LPVR,
  _LPVRi,
  _LS,
  _LSR,
  _LSRi,
  _LSRS,
  _LSRSi,
  _LUT,
  _LUTa,
  _Me,
  _MN,
  _MR,
  _N,
  _NOA,
  _NT,
  _O,
  _P,
  _PA,
  _PII,
  _PIS,
  _PISA,
  _PR,
  _PRA,
  _PRo,
  _PT,
  _PU,
  _PV,
  _PVA,
  _PVo,
  _PVS,
  _PWD,
  _R,
  _RAI,
  _RC,
  _Re,
  _RPA,
  _RR,
  _RSP,
  _RT,
  _S,
  _SA,
  _SAATD,
  _SAATDR,
  _SAATDRt,
  _SC,
  _Se,
  _SK,
  _SM,
  _SMe,
  _SV,
  _T,
  _UIT,
  _USA,
  _V,
  _VI,
  n0,
} from "./schemas_0";
import {
  ApprovalStrategy,
  ApprovalTeamRequestApprovers,
  Description,
  MofNApprovalStrategy,
} from "./schemas_3_Approval";
import { Tags } from "./schemas_4_Resource";
import { PolicyDocument } from "./schemas_5_Policy";

/* eslint no-var: 0 */

export var RequesterComment = sim(n0, _RC, 0, 8);
export var SessionKey = sim(n0, _SK, 0, 8);
export var SessionValue = sim(n0, _SV, 0, 8);
export var CreateApprovalTeamRequest = struct(
  n0,
  _CATR,
  0,
  [_CT, _AS, _A, _D, _P, _N, _T],
  [
    [0, 4],
    () => ApprovalStrategy,
    () => ApprovalTeamRequestApprovers,
    [() => Description, 0],
    () => PoliciesReferences,
    0,
    [() => Tags, 0],
  ]
);
export var CreateApprovalTeamResponse = struct(n0, _CATRr, 0, [_CTr, _Ar, _N, _VI], [5, 0, 0, 0]);
export var CreateIdentitySourceRequest = struct(
  n0,
  _CISR,
  0,
  [_ISP, _CT, _T],
  [() => IdentitySourceParameters, [0, 4], [() => Tags, 0]]
);
export var CreateIdentitySourceResponse = struct(n0, _CISRr, 0, [_IST, _ISA, _CTr], [0, 0, 5]);
export var Filter = struct(n0, _F, 0, [_FN, _O, _V], [0, 0, 0]);
export var GetApprovalTeamRequest = struct(n0, _GATR, 0, [_Ar], [[0, 1]]);
export var GetApprovalTeamResponse = struct(
  n0,
  _GATRe,
  0,
  [_CTr, _AS, _NOA, _A, _Ar, _D, _N, _S, _SC, _SM, _USA, _VI, _P, _LUT, _PU],
  [
    5,
    () => ApprovalStrategyResponse,
    1,
    () => GetApprovalTeamResponseApprovers,
    0,
    [() => Description, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    () => PoliciesReferences,
    5,
    () => PendingUpdate,
  ]
);
export var GetApprovalTeamResponseApprover = struct(n0, _GATRA, 0, [_AI, _RT, _PII, _PISA, _PIS], [0, 5, 0, 0, 0]);
export var GetIdentitySourceRequest = struct(n0, _GISR, 0, [_ISA], [[0, 1]]);
export var GetIdentitySourceResponse = struct(
  n0,
  _GISRe,
  0,
  [_IST, _ISP, _ISA, _CTr, _S, _SC, _SM],
  [0, () => IdentitySourceParametersForGet, 0, 5, 0, 0, 0]
);
export var GetPolicyVersionRequest = struct(n0, _GPVR, 0, [_PVA], [[0, 1]]);
export var GetPolicyVersionResponse = struct(n0, _GPVRe, 0, [_PV], [[() => PolicyVersion, 0]]);
export var GetSessionRequest = struct(n0, _GSR, 0, [_SA], [[0, 1]]);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [
    _SA,
    _ATA,
    _ATN,
    _PRA,
    _AS,
    _NOA,
    _IT,
    _ET,
    _CTo,
    _D,
    _Me,
    _S,
    _SC,
    _SM,
    _ES,
    _AN,
    _RSP,
    _RPA,
    _RAI,
    _RR,
    _RC,
    _ACS,
    _AR,
  ],
  [
    0,
    0,
    0,
    0,
    () => ApprovalStrategyResponse,
    1,
    5,
    5,
    5,
    [() => Description, 0],
    [() => SessionMetadata, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => RequesterComment, 0],
    0,
    () => GetSessionResponseApproverResponses,
  ]
);
export var GetSessionResponseApproverResponse = struct(n0, _GSRAR, 0, [_AI, _ISA, _II, _R, _RT], [0, 0, 0, 0, 5]);
export var IamIdentityCenter = struct(n0, _IIC, 0, [_IA, _Re], [0, 0]);
export var IamIdentityCenterForGet = struct(n0, _IICFG, 0, [_IA, _APU, _Re], [0, 0, 0]);
export var IamIdentityCenterForList = struct(n0, _IICFL, 0, [_IA, _APU, _Re], [0, 0, 0]);
export var IdentitySourceForList = struct(
  n0,
  _ISFL,
  0,
  [_IST, _ISP, _ISA, _CTr, _S, _SC, _SM],
  [0, () => IdentitySourceParametersForList, 0, 5, 0, 0, 0]
);
export var IdentitySourceParameters = struct(n0, _ISP, 0, [_IIC], [() => IamIdentityCenter]);
export var ListApprovalTeamsRequest = struct(
  n0,
  _LATR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListApprovalTeamsResponse = struct(
  n0,
  _LATRi,
  0,
  [_NT, _AT],
  [0, [() => ListApprovalTeamsResponseApprovalTeams, 0]]
);
export var ListApprovalTeamsResponseApprovalTeam = struct(
  n0,
  _LATRAT,
  0,
  [_CTr, _AS, _NOA, _Ar, _N, _D, _S, _SC, _SM],
  [5, () => ApprovalStrategyResponse, 1, 0, 0, [() => Description, 0], 0, 0, 0]
);
export var ListIdentitySourcesRequest = struct(
  n0,
  _LISR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListIdentitySourcesResponse = struct(n0, _LISRi, 0, [_NT, _IS], [0, () => IdentitySources]);
export var ListPolicyVersionsRequest = struct(
  n0,
  _LPVR,
  0,
  [_MR, _NT, _PA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [0, 1],
  ]
);
export var ListPolicyVersionsResponse = struct(n0, _LPVRi, 0, [_NT, _PVo], [0, () => PolicyVersions]);
export var ListSessionsRequest = struct(n0, _LSR, 0, [_ATA, _MR, _NT, _Fi], [[0, 1], 1, 0, () => Filters]);
export var ListSessionsResponse = struct(n0, _LSRi, 0, [_NT, _Se], [0, [() => ListSessionsResponseSessions, 0]]);
export var ListSessionsResponseSession = struct(
  n0,
  _LSRS,
  0,
  [_SA, _ATN, _ATA, _IT, _ET, _CTo, _D, _AN, _PRA, _RSP, _RPA, _RR, _RAI, _S, _SC, _SM, _ACS],
  [0, 0, 0, 5, 5, 5, [() => Description, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var PendingUpdate = struct(
  n0,
  _PU,
  0,
  [_VI, _D, _AS, _NOA, _S, _SC, _SM, _A, _UIT],
  [0, 0, () => ApprovalStrategyResponse, 1, 0, 0, 0, () => GetApprovalTeamResponseApprovers, 5]
);
export var PolicyReference = struct(n0, _PR, 0, [_PA], [0]);
export var PolicyVersion = struct(
  n0,
  _PV,
  0,
  [_Ar, _PA, _VI, _PT, _ID, _N, _S, _CTr, _LUTa, _Do],
  [0, 0, 1, 0, 2, 0, 0, 5, 5, [() => PolicyDocument, 0]]
);
export var PolicyVersionSummary = struct(
  n0,
  _PVS,
  0,
  [_Ar, _PA, _VI, _PT, _ID, _N, _S, _CTr, _LUTa],
  [0, 0, 1, 0, 2, 0, 0, 5, 5]
);
export var StartActiveApprovalTeamDeletionRequest = struct(n0, _SAATDR, 0, [_PWD, _Ar], [1, [0, 1]]);
export var StartActiveApprovalTeamDeletionResponse = struct(n0, _SAATDRt, 0, [_DCT, _DST], [5, 5]);
export var Filters = list(n0, _Fi, 0, () => Filter);
export var GetApprovalTeamResponseApprovers = list(n0, _GATRAe, 0, () => GetApprovalTeamResponseApprover);
export var GetSessionResponseApproverResponses = list(n0, _GSRARe, 0, () => GetSessionResponseApproverResponse);
export var IdentitySources = list(n0, _IS, 0, () => IdentitySourceForList);
export var ListApprovalTeamsResponseApprovalTeams = list(n0, _LATRATi, 0, [
  () => ListApprovalTeamsResponseApprovalTeam,
  0,
]);
export var ListSessionsResponseSessions = list(n0, _LSRSi, 0, [() => ListSessionsResponseSession, 0]);
export var PoliciesReferences = list(n0, _PRo, 0, () => PolicyReference);
export var PolicyVersions = list(n0, _PVo, 0, () => PolicyVersionSummary);
export var SessionMetadata = map(n0, _SMe, 8, [() => SessionKey, 0], [() => SessionValue, 0]);
export var ApprovalStrategyResponse = uni(n0, _ASR, 0, [_MN], [() => MofNApprovalStrategy]);
export var IdentitySourceParametersForGet = uni(n0, _ISPFG, 0, [_IIC], [() => IamIdentityCenterForGet]);
export var IdentitySourceParametersForList = uni(n0, _ISPFL, 0, [_IIC], [() => IamIdentityCenterForList]);
export var CreateApprovalTeam = op(
  n0,
  _CAT,
  {
    [_h]: ["POST", "/approval-teams", 200],
  },
  () => CreateApprovalTeamRequest,
  () => CreateApprovalTeamResponse
);
export var CreateIdentitySource = op(
  n0,
  _CIS,
  {
    [_h]: ["POST", "/identity-sources", 200],
  },
  () => CreateIdentitySourceRequest,
  () => CreateIdentitySourceResponse
);
export var GetApprovalTeam = op(
  n0,
  _GAT,
  {
    [_h]: ["GET", "/approval-teams/{Arn}", 200],
  },
  () => GetApprovalTeamRequest,
  () => GetApprovalTeamResponse
);
export var GetIdentitySource = op(
  n0,
  _GIS,
  {
    [_h]: ["GET", "/identity-sources/{IdentitySourceArn}", 200],
  },
  () => GetIdentitySourceRequest,
  () => GetIdentitySourceResponse
);
export var GetPolicyVersion = op(
  n0,
  _GPV,
  {
    [_h]: ["GET", "/policy-versions/{PolicyVersionArn}", 200],
  },
  () => GetPolicyVersionRequest,
  () => GetPolicyVersionResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/sessions/{SessionArn}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var ListApprovalTeams = op(
  n0,
  _LAT,
  {
    [_h]: ["POST", "/approval-teams/?List", 200],
  },
  () => ListApprovalTeamsRequest,
  () => ListApprovalTeamsResponse
);
export var ListIdentitySources = op(
  n0,
  _LIS,
  {
    [_h]: ["POST", "/identity-sources/?List", 200],
  },
  () => ListIdentitySourcesRequest,
  () => ListIdentitySourcesResponse
);
export var ListPolicyVersions = op(
  n0,
  _LPV,
  {
    [_h]: ["POST", "/policies/{PolicyArn}/?List", 200],
  },
  () => ListPolicyVersionsRequest,
  () => ListPolicyVersionsResponse
);
export var ListSessions = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/approval-teams/{ApprovalTeamArn}/sessions/?List", 200],
  },
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
export var StartActiveApprovalTeamDeletion = op(
  n0,
  _SAATD,
  {
    [_h]: ["POST", "/approval-teams/{Arn}?Delete", 200],
  },
  () => StartActiveApprovalTeamDeletionRequest,
  () => StartActiveApprovalTeamDeletionResponse
);
