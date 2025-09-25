// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAI,
  _Ac,
  _ACd,
  _Ad,
  _AFU,
  _ALMD,
  _Am,
  _AMO,
  _AP,
  _APp,
  _APw,
  _Ar,
  _AS,
  _ASd,
  _BLMD,
  _BP,
  _BT,
  _C,
  _CA,
  _CB,
  _CBP,
  _CC,
  _CCN,
  _CCu,
  _CD,
  _CEI,
  _CEIR,
  _CEIRr,
  _CER,
  _CEr,
  _CERr,
  _Ch,
  _Ci,
  _CLR,
  _CN,
  _CNa,
  _CNo,
  _CO,
  _Co,
  _Cont,
  _COR,
  _CORr,
  _CP,
  _CPC,
  _CS,
  _CT,
  _Cu,
  _CUC,
  _CWU,
  _D,
  _De,
  _DM,
  _DMe,
  _DN,
  _E,
  _EC,
  _ECBP,
  _ECD,
  _ECn,
  _ECP,
  _ECPD,
  _ECS,
  _ED,
  _EDf,
  _EDn,
  _EI,
  _EIn,
  _EMS,
  _EMSn,
  _EMx,
  _ET,
  _FN,
  _GE,
  _GEI,
  _GEIR,
  _GEIRe,
  _GER,
  _GERe,
  _GO,
  _GOR,
  _GORe,
  _GRS,
  _GRSR,
  _GRSRe,
  _h,
  _I,
  _ID,
  _Id,
  _IM,
  _In,
  _Inv,
  _L,
  _LC,
  _LCFV,
  _LCRS,
  _LCS,
  _LCSi,
  _LMD,
  _LN,
  _LO,
  _LOR,
  _LORi,
  _M,
  _Ma,
  _MC,
  _MR,
  _MV,
  _NS,
  _NSa,
  _NSH,
  _NSHe,
  _NT,
  _O,
  _OCN,
  _OI,
  _OIP,
  _OIppo,
  _OS,
  _OSD,
  _OSp,
  _OSpp,
  _OSV,
  _OT,
  _OTp,
  _P,
  _Pa,
  _PC,
  _PD,
  _PNFA,
  _POI,
  _POTML,
  _Pr,
  _PSr,
  _PT,
  _PV,
  _R,
  _RC,
  _Re,
  _REIel,
  _RI,
  _RIe,
  _ROI,
  _RR,
  _RRe,
  _RS,
  _RSP,
  _RSR,
  _RSTI,
  _RSTN,
  _RT,
  _S,
  _SA,
  _SAa,
  _SAAI,
  _SB,
  _SC,
  _SCE,
  _SCe,
  _SCL,
  _SCN,
  _SO,
  _So,
  _SOR,
  _Sor,
  _Sou,
  _SR,
  _St,
  _T,
  _Ta,
  _TCD,
  _TCDa,
  _Ti,
  _Ty,
  _UC,
  _UO,
  _UOR,
  _UORp,
  _Va,
  _WU,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_Resource";
import {
  Contact,
  CurrencyCode,
  CustomerContactsList,
  ExpectedCustomerSpendList,
  JobTitle,
  Name,
  PhoneNumber,
  PiiString,
  WebsiteUrl,
} from "./schemas_8_Opportunity";
import { MemberCompanyName } from "./schemas_14_Engagement";
import { Receiver } from "./schemas_15_Engagement";
import { AwsAccount } from "./schemas_18_Engagement";

/* eslint no-var: 0 */

export var AddressPart = sim(n0, _AP, 0, 8);
export var CompanyName = sim(n0, _CN, 0, 8);
export var CompanyWebsiteUrl = sim(n0, _CWU, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var DunsNumber = sim(n0, _DN, 0, 8);
export var EngagementCustomerBusinessProblem = sim(n0, _ECBP, 0, 8);
export var InvitationMessage = sim(n0, _IM, 0, 8);
export var SenderContactEmail = sim(n0, _SCE, 0, 8);
export var Account = struct(
  n0,
  _Ac,
  0,
  [_In, _OI, _CN, _WU, _AAI, _Ad, _D],
  [0, 0, [() => Name, 0], [() => WebsiteUrl, 0], [() => AwsAccount, 0], [() => Address, 0], [() => DunsNumber, 0]]
);
export var AccountSummary = struct(
  n0,
  _AS,
  0,
  [_In, _OI, _CN, _WU, _Ad],
  [0, 0, [() => Name, 0], [() => WebsiteUrl, 0], [() => AddressSummary, 0]]
);
export var Address = struct(
  n0,
  _Ad,
  0,
  [_Ci, _PC, _SOR, _CC, _SA],
  [
    [() => AddressPart, 0],
    [() => AddressPart, 0],
    [() => AddressPart, 0],
    [() => CountryCode, 0],
    [() => AddressPart, 0],
  ]
);
export var AddressSummary = struct(
  n0,
  _ASd,
  0,
  [_Ci, _PC, _SOR, _CC],
  [
    [() => AddressPart, 0],
    [() => AddressPart, 0],
    [() => AddressPart, 0],
    [() => CountryCode, 0],
  ]
);
export var CreateEngagementInvitationRequest = struct(
  n0,
  _CEIR,
  0,
  [_C, _CT, _EI, _Inv],
  [0, [0, 4], 0, [() => Invitation, 0]]
);
export var CreateEngagementInvitationResponse = struct(n0, _CEIRr, 0, [_Id, _Ar], [0, 0]);
export var CreateEngagementRequest = struct(
  n0,
  _CER,
  0,
  [_C, _CT, _T, _De, _Cont],
  [0, [0, 4], 0, 0, [() => EngagementContexts, 0]]
);
export var CreateEngagementResponse = struct(n0, _CERr, 0, [_Id, _Ar], [0, 0]);
export var CreateOpportunityRequest = struct(
  n0,
  _COR,
  0,
  [_C, _PNFA, _NSa, _POI, _Cu, _Pr, _OT, _Ma, _SR, _CT, _LC, _O, _OTp, _Ta],
  [
    0,
    64 | 0,
    0,
    0,
    [() => Customer, 0],
    [() => Project, 0],
    0,
    () => Marketing,
    [() => SoftwareRevenue, 0],
    [0, 4],
    [() => LifeCycle, 0],
    0,
    [() => PartnerOpportunityTeamMembersList, 0],
    () => TagList,
  ]
);
export var CreateOpportunityResponse = struct(n0, _CORr, 0, [_Id, _POI, _LMD], [0, 0, 5]);
export var Customer = struct(
  n0,
  _Cu,
  0,
  [_Ac, _Co],
  [
    [() => Account, 0],
    [() => CustomerContactsList, 0],
  ]
);
export var CustomerProjectsContext = struct(
  n0,
  _CPC,
  0,
  [_Cu, _Pr],
  [
    [() => EngagementCustomer, 0],
    [() => EngagementCustomerProjectDetails, 0],
  ]
);
export var CustomerSummary = struct(n0, _CS, 0, [_Ac], [[() => AccountSummary, 0]]);
export var EngagementContextDetails = struct(n0, _ECD, 0, [_Ty, _Pa], [0, [() => EngagementContextPayload, 0]]);
export var EngagementCustomer = struct(
  n0,
  _EC,
  0,
  [_In, _CN, _WU, _CC],
  [0, [() => CompanyName, 0], [() => CompanyWebsiteUrl, 0], [() => CountryCode, 0]]
);
export var EngagementCustomerProjectDetails = struct(
  n0,
  _ECPD,
  0,
  [_T, _BP, _TCDa],
  [0, [() => EngagementCustomerBusinessProblem, 0], 0]
);
export var EngagementMemberSummary = struct(n0, _EMS, 0, [_CN, _WU], [[() => MemberCompanyName, 0], 0]);
export var GetEngagementInvitationRequest = struct(n0, _GEIR, 0, [_C, _I], [0, 0]);
export var GetEngagementInvitationResponse = struct(
  n0,
  _GEIRe,
  0,
  [_Ar, _PT, _Id, _EIn, _ET, _St, _ID, _ED, _SAAI, _SCN, _Re, _C, _RR, _Pa, _IM, _EDn, _EMx],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    [() => AwsAccount, 0],
    0,
    [() => Receiver, 0],
    0,
    0,
    [() => Payload, 0],
    [() => InvitationMessage, 0],
    0,
    [() => EngagementMemberSummaries, 0],
  ]
);
export var GetEngagementRequest = struct(n0, _GER, 0, [_C, _I], [0, 0]);
export var GetEngagementResponse = struct(
  n0,
  _GERe,
  0,
  [_Id, _Ar, _T, _De, _CA, _CB, _MC, _Cont],
  [0, 0, 0, 0, 5, [() => AwsAccount, 0], 1, [() => EngagementContexts, 0]]
);
export var GetOpportunityRequest = struct(n0, _GOR, 0, [_C, _I], [0, 0]);
export var GetOpportunityResponse = struct(
  n0,
  _GORe,
  0,
  [_C, _PNFA, _NSa, _POI, _Cu, _Pr, _OT, _Ma, _SR, _Id, _Ar, _LMD, _CD, _REIel, _LC, _OTp],
  [
    0,
    64 | 0,
    0,
    0,
    [() => Customer, 0],
    [() => Project, 0],
    0,
    () => Marketing,
    [() => SoftwareRevenue, 0],
    0,
    0,
    5,
    5,
    () => RelatedEntityIdentifiers,
    [() => LifeCycle, 0],
    [() => PartnerOpportunityTeamMembersList, 0],
  ]
);
export var GetResourceSnapshotRequest = struct(n0, _GRSR, 0, [_C, _EI, _RT, _RI, _RSTI, _R], [0, 0, 0, 0, 0, 1]);
export var GetResourceSnapshotResponse = struct(
  n0,
  _GRSRe,
  0,
  [_C, _Ar, _CB, _CA, _EIn, _RT, _RIe, _RSTN, _R, _Pa],
  [0, 0, [() => AwsAccount, 0], 5, 0, 0, 0, 0, 1, [() => ResourceSnapshotPayload, 0]]
);
export var Invitation = struct(
  n0,
  _Inv,
  0,
  [_M, _Re, _Pa],
  [
    [() => InvitationMessage, 0],
    [() => Receiver, 0],
    [() => Payload, 0],
  ]
);
export var LastModifiedDate = struct(n0, _LMD, 0, [_ALMD, _BLMD], [5, 5]);
export var LifeCycle = struct(
  n0,
  _LC,
  0,
  [_S, _CLR, _NS, _TCD, _RS, _RC, _RSR, _NSH],
  [0, 0, [() => PiiString, 0], 0, 0, 0, 0, () => NextStepsHistories]
);
export var LifeCycleForView = struct(n0, _LCFV, 0, [_TCD, _RS, _S, _NS], [0, 0, 0, [() => PiiString, 0]]);
export var LifeCycleSummary = struct(
  n0,
  _LCS,
  0,
  [_S, _CLR, _NS, _TCD, _RS, _RC, _RSR],
  [0, 0, [() => PiiString, 0], 0, 0, 0, 0]
);
export var ListOpportunitiesRequest = struct(
  n0,
  _LOR,
  0,
  [_C, _MR, _NT, _Sor, _LMD, _I, _LCSi, _LCRS, _CCN],
  [0, 1, 0, () => OpportunitySort, () => LastModifiedDate, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ListOpportunitiesResponse = struct(n0, _LORi, 0, [_OS, _NT], [[() => OpportunitySummaries, 0], 0]);
export var Marketing = struct(n0, _Ma, 0, [_CNa, _Sou, _UC, _Ch, _AFU], [0, 0, 64 | 0, 64 | 0, 0]);
export var MonetaryValue = struct(n0, _MV, 0, [_Am, _CCu], [0, [() => CurrencyCode, 0]]);
export var NextStepsHistory = struct(n0, _NSH, 0, [_Va, _Ti], [0, 5]);
export var OpportunityInvitationPayload = struct(
  n0,
  _OIP,
  0,
  [_SC, _RRe, _Cu, _Pr],
  [[() => SenderContactList, 0], 64 | 0, [() => EngagementCustomer, 0], [() => ProjectDetails, 0]]
);
export var OpportunitySort = struct(n0, _OSp, 0, [_SO, _SB], [0, 0]);
export var OpportunitySummary = struct(
  n0,
  _OSpp,
  0,
  [_C, _Id, _Ar, _POI, _OT, _LMD, _CD, _LC, _Cu, _Pr],
  [0, 0, 0, 0, 0, 5, 5, [() => LifeCycleSummary, 0], [() => CustomerSummary, 0], [() => ProjectSummary, 0]]
);
export var OpportunitySummaryView = struct(
  n0,
  _OSV,
  0,
  [_OT, _L, _OTp, _PNFA, _Cu, _Pr, _REIel],
  [
    0,
    [() => LifeCycleForView, 0],
    [() => PartnerOpportunityTeamMembersList, 0],
    64 | 0,
    [() => Customer, 0],
    [() => ProjectView, 0],
    () => RelatedEntityIdentifiers,
  ]
);
export var Project = struct(
  n0,
  _Pr,
  0,
  [_DM, _ECS, _T, _APp, _CBP, _CUC, _ROI, _SAa, _CNo, _OCN, _OSD, _ACd],
  [
    64 | 0,
    [() => ExpectedCustomerSpendList, 0],
    [() => PiiString, 0],
    64 | 0,
    [() => PiiString, 0],
    0,
    0,
    64 | 0,
    0,
    0,
    [() => PiiString, 0],
    0,
  ]
);
export var ProjectDetails = struct(
  n0,
  _PD,
  0,
  [_BP, _T, _TCDa, _ECS],
  [[() => EngagementCustomerBusinessProblem, 0], 0, 0, [() => ExpectedCustomerSpendList, 0]]
);
export var ProjectSummary = struct(n0, _PSr, 0, [_DM, _ECS], [64 | 0, [() => ExpectedCustomerSpendList, 0]]);
export var ProjectView = struct(
  n0,
  _PV,
  0,
  [_DM, _ECS, _CUC, _SAa, _OSD],
  [64 | 0, [() => ExpectedCustomerSpendList, 0], 0, 64 | 0, [() => PiiString, 0]]
);
export var RelatedEntityIdentifiers = struct(n0, _REIel, 0, [_AMO, _So, _APw], [64 | 0, 64 | 0, 64 | 0]);
export var SenderContact = struct(
  n0,
  _SCe,
  0,
  [_E, _FN, _LN, _BT, _P],
  [
    [() => SenderContactEmail, 0],
    [() => Name, 0],
    [() => Name, 0],
    [() => JobTitle, 0],
    [() => PhoneNumber, 0],
  ]
);
export var SoftwareRevenue = struct(n0, _SR, 0, [_DMe, _Va, _EDf, _ED], [0, [() => MonetaryValue, 0], 0, 0]);
export var UpdateOpportunityRequest = struct(
  n0,
  _UOR,
  0,
  [_C, _PNFA, _NSa, _POI, _Cu, _Pr, _OT, _Ma, _SR, _LMD, _I, _LC],
  [
    0,
    64 | 0,
    0,
    0,
    [() => Customer, 0],
    [() => Project, 0],
    0,
    () => Marketing,
    [() => SoftwareRevenue, 0],
    5,
    0,
    [() => LifeCycle, 0],
  ]
);
export var UpdateOpportunityResponse = struct(n0, _UORp, 0, [_Id, _LMD], [0, 5]);
export var ApnPrograms = 64 | 0;

export var AwsMarketplaceOfferIdentifiers = 64 | 0;

export var Channels = 64 | 0;

export var DeliveryModels = 64 | 0;

export var EngagementContexts = list(n0, _ECn, 0, [() => EngagementContextDetails, 0]);
export var EngagementMemberSummaries = list(n0, _EMSn, 0, [() => EngagementMemberSummary, 0]);
export var FilterIdentifier = 64 | 0;

export var FilterLifeCycleReviewStatus = 64 | 0;

export var FilterLifeCycleStage = 64 | 0;

export var NextStepsHistories = list(n0, _NSHe, 0, () => NextStepsHistory);
export var OpportunitySummaries = list(n0, _OS, 0, [() => OpportunitySummary, 0]);
export var PartnerOpportunityTeamMembersList = list(n0, _POTML, 0, [() => Contact, 0]);
export var PrimaryNeedsFromAws = 64 | 0;

export var ReceiverResponsibilityList = 64 | 0;

export var SalesActivities = 64 | 0;

export var SenderContactList = list(n0, _SCL, 0, [() => SenderContact, 0]);
export var UseCases = 64 | 0;

export var EngagementContextPayload = uni(n0, _ECP, 0, [_CP], [[() => CustomerProjectsContext, 0]]);
export var Payload = uni(n0, _Pa, 0, [_OIppo], [[() => OpportunityInvitationPayload, 0]]);
export var ResourceSnapshotPayload = uni(n0, _RSP, 0, [_OSpp], [[() => OpportunitySummaryView, 0]]);
export var CreateEngagement = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/CreateEngagement", 200],
  },
  () => CreateEngagementRequest,
  () => CreateEngagementResponse
);
export var CreateEngagementInvitation = op(
  n0,
  _CEI,
  {
    [_h]: ["POST", "/CreateEngagementInvitation", 200],
  },
  () => CreateEngagementInvitationRequest,
  () => CreateEngagementInvitationResponse
);
export var CreateOpportunity = op(
  n0,
  _CO,
  {
    [_h]: ["POST", "/CreateOpportunity", 200],
  },
  () => CreateOpportunityRequest,
  () => CreateOpportunityResponse
);
export var GetEngagement = op(
  n0,
  _GE,
  {
    [_h]: ["POST", "/GetEngagement", 200],
  },
  () => GetEngagementRequest,
  () => GetEngagementResponse
);
export var GetEngagementInvitation = op(
  n0,
  _GEI,
  {
    [_h]: ["POST", "/GetEngagementInvitation", 200],
  },
  () => GetEngagementInvitationRequest,
  () => GetEngagementInvitationResponse
);
export var GetOpportunity = op(
  n0,
  _GO,
  {
    [_h]: ["POST", "/GetOpportunity", 200],
  },
  () => GetOpportunityRequest,
  () => GetOpportunityResponse
);
export var GetResourceSnapshot = op(
  n0,
  _GRS,
  {
    [_h]: ["POST", "/GetResourceSnapshot", 200],
  },
  () => GetResourceSnapshotRequest,
  () => GetResourceSnapshotResponse
);
export var ListOpportunities = op(
  n0,
  _LO,
  {
    [_h]: ["POST", "/ListOpportunities", 200],
  },
  () => ListOpportunitiesRequest,
  () => ListOpportunitiesResponse
);
export var UpdateOpportunity = op(
  n0,
  _UO,
  {
    [_h]: ["POST", "/UpdateOpportunity", 200],
  },
  () => UpdateOpportunityRequest,
  () => UpdateOpportunityResponse
);
