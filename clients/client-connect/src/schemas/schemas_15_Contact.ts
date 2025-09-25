// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  DestinationNotAllowedException as __DestinationNotAllowedException,
  OutboundContactNotPermittedException as __OutboundContactNotPermittedException,
} from "../models/index";
import {
  _A,
  _AAMP,
  _ACl,
  _ACn,
  _ACWD,
  _ACWET,
  _ACWST,
  _Ad,
  _AER,
  _AFRT,
  _AFRTIM,
  _AFU,
  _AFu,
  _Ag,
  _AHG,
  _AHU,
  _AI,
  _AIHD,
  _AIt,
  _AM,
  _AMDC,
  _AMDS,
  _APDIS,
  _aQE,
  _AQM,
  _AQMI,
  _ARd,
  _At,
  _ATC,
  _ATct,
  _Atta,
  _Attr,
  _Au,
  _B,
  _C,
  _c,
  _CA,
  _Ca,
  _CAc,
  _CAI,
  _Cam,
  _CAon,
  _CCM,
  _CCR,
  _CCr,
  _CCRr,
  _CCTIM,
  _CD,
  _CDo,
  _CEAR,
  _CEAr,
  _CEARr,
  _CEon,
  _CEont,
  _CEu,
  _CFI,
  _CI,
  _CIa,
  _CIu,
  _CL,
  _CMh,
  _CMu,
  _Cont,
  _CQM,
  _CT,
  _CTAT,
  _CTC,
  _CTo,
  _CTrea,
  _CTST,
  _Cu,
  _CVA,
  _D,
  _DCe,
  _DCR,
  _DCRe,
  _DD,
  _DEA,
  _DEAes,
  _DEARes,
  _DEAResc,
  _DI,
  _DIS,
  _DN,
  _DNAE,
  _DPN,
  _DR,
  _DRe,
  _DT,
  _DTe,
  _e,
  _EA,
  _EAA,
  _EAI,
  _EAL,
  _EAM,
  _EAm,
  _EAma,
  _EAmai,
  _EAMD,
  _EASC,
  _EASCL,
  _EASF,
  _EAv,
  _EDIM,
  _EIn,
  _EIU,
  _EL,
  _EMm,
  _ER,
  _ERL,
  _ERm,
  _ET,
  _ETn,
  _ETx,
  _Ex,
  _Exp,
  _FEA,
  _FIo,
  _FN,
  _FSN,
  _FSNr,
  _GET,
  _GST,
  _h,
  _He,
  _hE,
  _HG,
  _I,
  _IA,
  _IAR,
  _ICI,
  _IEC,
  _II,
  _IM,
  _Ind,
  _IRMn,
  _IS,
  _IT,
  _JT,
  _Le,
  _Lev,
  _Leve,
  _Level,
  _Level_,
  _LMTa,
  _Lo,
  _LPT,
  _LRT,
  _LUT,
  _M,
  _Me,
  _MF,
  _MFC,
  _MI,
  _MLIC,
  _MP,
  _MPe,
  _MRa,
  _MRe,
  _MRTIM,
  _MS,
  _MST,
  _MSTe,
  _MT,
  _N,
  _NRu,
  _NT,
  _OC,
  _OCNPE,
  _OSp,
  _PCI,
  _PD,
  _PDI,
  _PI,
  _PM,
  _PNl,
  _PQI,
  _PT,
  _PTa,
  _PV,
  _QCIu,
  _QI,
  _QII,
  _QIu,
  _QM,
  _QP,
  _QS,
  _QTAS,
  _RC,
  _RCI,
  _Re,
  _Ref,
  _RIec,
  _RM,
  _S,
  _SAe,
  _SAes,
  _SC,
  _SCe,
  _SE,
  _SEAe,
  _SEAR,
  _SEARe,
  _SEC,
  _SECR,
  _SECRt,
  _SET,
  _SF,
  _SOVC,
  _SOVCR,
  _SOVCRt,
  _SPNo,
  _SST,
  _St,
  _STC,
  _STc,
  _STch,
  _STCR,
  _STCRt,
  _Ste,
  _Step,
  _STt,
  _STta,
  _STtat,
  _STto,
  _STtop,
  _Su,
  _SUi,
  _SUr,
  _SWRTCC,
  _SWRTCCR,
  _SWRTCCRt,
  _T,
  _Ta,
  _TAo,
  _TBM,
  _TBMLIC,
  _TCU,
  _TF,
  _TL,
  _TM,
  _TPC,
  _TPDIS,
  _TRTIM,
  _TTI,
  _TTr,
  _UCp,
  _UCRp,
  _UCRpd,
  _UEAM,
  _UEAMR,
  _UEAMRp,
  _UI,
  _UIs,
  _WI,
  n0,
  StringCondition,
} from "./schemas_0";
import { ParticipantDetails } from "./schemas_3_Contact";
import { Expression } from "./schemas_5_Contact";
import { ContactReferences } from "./schemas_7_Contact";
import { SegmentAttributes } from "./schemas_24_Contact";
import { ControlPlaneTagFilter } from "./schemas_38_Search";
import { Campaign, Endpoint } from "./schemas_64_Contact";
import {
  Body,
  EmailAddress,
  EmailAddressDisplayName,
  EmailAddressInfo,
  EmailAddressRecipientList,
} from "./schemas_73_Email";
import { ParticipantCapabilities } from "./schemas_105_Contact";

/* eslint no-var: 0 */

export var Description = sim(n0, _D, 0, 8);
export var InboundSubject = sim(n0, _IS, 0, 8);
export var JoinToken = sim(n0, _JT, 0, 8);
export var Name = sim(n0, _N, 0, 8);
export var AdditionalEmailRecipients = struct(
  n0,
  _AER,
  0,
  [_TL, _CL],
  [() => EmailRecipientsList, () => EmailRecipientsList]
);
export var AgentHierarchyGroup = struct(n0, _AHG, 0, [_A], [0]);
export var AgentInfo = struct(
  n0,
  _AI,
  0,
  [_I, _CTAT, _APDIS, _HG, _DI, _Ca, _ACWD, _ACWST, _ACWET, _AIHD, _STt],
  [0, 4, 1, () => HierarchyGroups, () => DeviceInfo, () => ParticipantCapabilities, 1, 4, 4, 1, () => StateTransitions]
);
export var AgentQualityMetrics = struct(n0, _AQM, 0, [_Au], [() => AudioQualityMetricsInfo]);
export var AllowedCapabilities = struct(
  n0,
  _ACl,
  0,
  [_Cu, _Ag],
  [() => ParticipantCapabilities, () => ParticipantCapabilities]
);
export var AnswerMachineDetectionConfig = struct(n0, _AMDC, 0, [_EAMD, _AAMP], [2, 2]);
export var Attendee = struct(n0, _At, 0, [_AIt, _JT], [0, [() => JoinToken, 0]]);
export var AudioFeatures = struct(n0, _AFu, 0, [_ER], [0]);
export var AudioQualityMetricsInfo = struct(n0, _AQMI, 0, [_QS, _PQI], [1, 64 | 0]);
export var ChatContactMetrics = struct(
  n0,
  _CCM,
  0,
  [_MP, _TM, _TBM, _TBMLIC, _CCTIM, _CTC, _AFRT, _AFRTIM],
  [2, 1, 1, 1, 1, 1, 4, 1]
);
export var ChatMetrics = struct(
  n0,
  _CMh,
  0,
  [_CCM, _AM, _CMu],
  [() => ChatContactMetrics, () => ParticipantMetrics, () => ParticipantMetrics]
);
export var ConnectionData = struct(n0, _CD, 0, [_At, _Me], [[() => Attendee, 0], () => Meeting]);
export var Contact = struct(
  n0,
  _Cont,
  0,
  [
    _A,
    _I,
    _ICI,
    _PCI,
    _CAI,
    _IM,
    _N,
    _D,
    _C,
    _QIu,
    _AI,
    _IT,
    _DT,
    _LUT,
    _LPT,
    _LRT,
    _TPC,
    _TPDIS,
    _STc,
    _RCI,
    _WI,
    _CIu,
    _CEu,
    _SE,
    _QTAS,
    _QP,
    _Ta,
    _CTST,
    _RC,
    _Cu,
    _Cam,
    _AMDS,
    _CVA,
    _QM,
    _CMh,
    _DD,
    _AER,
    _SAe,
    _Re,
    _DR,
    _CEon,
    _CDo,
    _Attr,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => Name, 0],
    [() => Description, 0],
    0,
    () => QueueInfo,
    () => AgentInfo,
    4,
    4,
    4,
    4,
    4,
    1,
    1,
    4,
    0,
    () => WisdomInfo,
    0,
    () => EndpointInfo,
    () => EndpointInfo,
    1,
    1,
    128 | 0,
    4,
    () => RoutingCriteria,
    () => Customer,
    () => Campaign,
    0,
    () => CustomerVoiceActivity,
    () => QualityMetrics,
    () => ChatMetrics,
    () => DisconnectDetails,
    () => AdditionalEmailRecipients,
    () => SegmentAttributes,
    () => Recordings,
    0,
    () => ContactEvaluations,
    () => ContactDetails,
    128 | 0,
  ]
);
export var ContactDetails = struct(n0, _CDo, 0, [_N, _D], [0, 0]);
export var ContactEvaluation = struct(n0, _CEont, 0, [_FIo, _EAv, _St, _STta, _ET, _DTe, _EL], [0, 0, 0, 4, 4, 4, 0]);
export var CreateContactRequest = struct(
  n0,
  _CCR,
  0,
  [_II, _CT, _RCI, _Attr, _Ref, _C, _IM, _EDIM, _UIs, _IA, _N, _D, _SAe, _PCI],
  [
    0,
    [0, 4],
    0,
    128 | 0,
    () => ContactReferences,
    0,
    0,
    1,
    () => UserInfo,
    0,
    [() => Name, 0],
    [() => Description, 0],
    () => SegmentAttributes,
    0,
  ]
);
export var CreateContactResponse = struct(n0, _CCRr, 0, [_CI, _CA], [0, 0]);
export var CreateEmailAddressRequest = struct(
  n0,
  _CEAR,
  0,
  [_D, _II, _EA, _DN, _Ta, _CT],
  [[() => Description, 0], [0, 1], [() => EmailAddress, 0], [() => EmailAddressDisplayName, 0], 128 | 0, 0]
);
export var CreateEmailAddressResponse = struct(n0, _CEARr, 0, [_EAI, _EAA], [0, 0]);
export var Customer = struct(n0, _Cu, 0, [_DI, _Ca], [() => DeviceInfo, () => ParticipantCapabilities]);
export var CustomerQualityMetrics = struct(n0, _CQM, 0, [_Au], [() => AudioQualityMetricsInfo]);
export var CustomerVoiceActivity = struct(n0, _CVA, 0, [_GST, _GET], [4, 4]);
export var DescribeContactRequest = struct(
  n0,
  _DCR,
  0,
  [_II, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeContactResponse = struct(n0, _DCRe, 0, [_Cont], [[() => Contact, 0]]);
export var DescribeEmailAddressRequest = struct(
  n0,
  _DEARes,
  0,
  [_II, _EAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeEmailAddressResponse = struct(
  n0,
  _DEAResc,
  0,
  [_EAI, _EAA, _EA, _DN, _D, _CTrea, _MT, _Ta],
  [0, 0, [() => EmailAddress, 0], [() => EmailAddressDisplayName, 0], [() => Description, 0], 0, 0, 128 | 0]
);
export var DestinationNotAllowedException = error(
  n0,
  _DNAE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DestinationNotAllowedException`, 403],
  },
  [_M],
  [0],

  __DestinationNotAllowedException
);
export var DeviceInfo = struct(n0, _DI, 0, [_PNl, _PV, _OSp], [0, 0, 0]);
export var DisconnectDetails = struct(n0, _DD, 0, [_PDI], [0]);
export var EmailAddressMetadata = struct(
  n0,
  _EAM,
  0,
  [_EAI, _EAA, _EA, _D, _DN],
  [0, 0, [() => EmailAddress, 0], [() => Description, 0], [() => EmailAddressDisplayName, 0]]
);
export var EmailAddressSearchCriteria = struct(
  n0,
  _EASC,
  0,
  [_OC, _ACn, _SC],
  [() => EmailAddressSearchConditionList, () => EmailAddressSearchConditionList, () => StringCondition]
);
export var EmailAddressSearchFilter = struct(n0, _EASF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var EmailAttachment = struct(n0, _EAm, 0, [_FN, _SUr], [0, 0]);
export var EmailRecipient = struct(n0, _ERm, 0, [_Ad, _DN], [0, 0]);
export var EndpointInfo = struct(n0, _EIn, 0, [_T, _Ad, _DN], [0, 0, 0]);
export var Expiry = struct(n0, _Ex, 0, [_DIS, _ETx], [1, 4]);
export var HierarchyGroups = struct(
  n0,
  _HG,
  0,
  [_Le, _Lev, _Leve, _Level, _Level_],
  [
    () => AgentHierarchyGroup,
    () => AgentHierarchyGroup,
    () => AgentHierarchyGroup,
    () => AgentHierarchyGroup,
    () => AgentHierarchyGroup,
  ]
);
export var InboundAdditionalRecipients = struct(
  n0,
  _IAR,
  0,
  [_TAo, _CAc],
  [
    [() => EmailAddressRecipientList, 0],
    [() => EmailAddressRecipientList, 0],
  ]
);
export var InboundEmailContent = struct(n0, _IEC, 0, [_MST, _RM], [0, [() => InboundRawMessage, 0]]);
export var InboundRawMessage = struct(
  n0,
  _IRMn,
  0,
  [_Su, _B, _CTo, _He],
  [[() => InboundSubject, 0], [() => Body, 0], 0, 128 | 0]
);
export var MediaPlacement = struct(n0, _MPe, 0, [_AHU, _AFU, _SUi, _TCU, _EIU], [0, 0, 0, 0, 0]);
export var Meeting = struct(
  n0,
  _Me,
  0,
  [_MRe, _MPe, _MF, _MI],
  [0, () => MediaPlacement, () => MeetingFeaturesConfiguration, 0]
);
export var MeetingFeaturesConfiguration = struct(n0, _MFC, 0, [_Au], [() => AudioFeatures]);
export var OutboundContactNotPermittedException = error(
  n0,
  _OCNPE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`OutboundContactNotPermittedException`, 403],
  },
  [_M],
  [0],

  __OutboundContactNotPermittedException
);
export var ParticipantMetrics = struct(
  n0,
  _PM,
  0,
  [_PI, _PT, _CAon, _MS, _NRu, _MLIC, _TRTIM, _MRTIM, _LMTa],
  [0, 0, 2, 1, 1, 1, 1, 1, 4]
);
export var QualityMetrics = struct(n0, _QM, 0, [_Ag, _Cu], [() => AgentQualityMetrics, () => CustomerQualityMetrics]);
export var QueueInfo = struct(n0, _QIu, 0, [_I, _ETn], [0, 4]);
export var QueueInfoInput = struct(n0, _QII, 0, [_I], [0]);
export var RecordingInfo = struct(
  n0,
  _RIec,
  0,
  [_STto, _Lo, _MSTe, _PT, _FSN, _FSNr, _STta, _STtop, _St, _DRe],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0]
);
export var RoutingCriteria = struct(n0, _RC, 0, [_Ste, _ATct, _Ind], [() => Steps, 4, 1]);
export var SearchEmailAddressesRequest = struct(
  n0,
  _SEAR,
  0,
  [_II, _MRa, _NT, _SCe, _SF],
  [0, 1, 0, () => EmailAddressSearchCriteria, () => EmailAddressSearchFilter]
);
export var SearchEmailAddressesResponse = struct(
  n0,
  _SEARe,
  0,
  [_NT, _EAma, _ATC],
  [0, [() => EmailAddressList, 0], 1]
);
export var StartEmailContactRequest = struct(
  n0,
  _SECR,
  0,
  [_II, _FEA, _DEA, _D, _Ref, _N, _EMm, _ARd, _Atta, _CFI, _RCI, _Attr, _SAe, _CT],
  [
    0,
    [() => EmailAddressInfo, 0],
    [() => EmailAddress, 0],
    [() => Description, 0],
    () => ContactReferences,
    [() => Name, 0],
    [() => InboundEmailContent, 0],
    [() => InboundAdditionalRecipients, 0],
    [() => EmailAttachments, 0],
    0,
    0,
    128 | 0,
    () => SegmentAttributes,
    [0, 4],
  ]
);
export var StartEmailContactResponse = struct(n0, _SECRt, 0, [_CI], [0]);
export var StartOutboundVoiceContactRequest = struct(
  n0,
  _SOVCR,
  0,
  [_N, _D, _Ref, _RCI, _DPN, _CFI, _II, _CT, _SPNo, _QI, _Attr, _AMDC, _CIa, _TTr],
  [
    [() => Name, 0],
    [() => Description, 0],
    () => ContactReferences,
    0,
    0,
    0,
    0,
    [0, 4],
    0,
    0,
    128 | 0,
    () => AnswerMachineDetectionConfig,
    0,
    0,
  ]
);
export var StartOutboundVoiceContactResponse = struct(n0, _SOVCRt, 0, [_CI], [0]);
export var StartTaskContactRequest = struct(
  n0,
  _STCR,
  0,
  [_II, _PCI, _CFI, _Attr, _N, _Ref, _D, _CT, _STch, _TTI, _QCIu, _RCI, _SAe],
  [
    0,
    0,
    0,
    128 | 0,
    [() => Name, 0],
    () => ContactReferences,
    [() => Description, 0],
    [0, 4],
    4,
    0,
    0,
    0,
    () => SegmentAttributes,
  ]
);
export var StartTaskContactResponse = struct(n0, _STCRt, 0, [_CI], [0]);
export var StartWebRTCContactRequest = struct(
  n0,
  _SWRTCCR,
  0,
  [_Attr, _CT, _CFI, _II, _ACl, _PD, _RCI, _Ref, _D],
  [
    128 | 0,
    [0, 4],
    0,
    0,
    () => AllowedCapabilities,
    () => ParticipantDetails,
    0,
    () => ContactReferences,
    [() => Description, 0],
  ]
);
export var StartWebRTCContactResponse = struct(
  n0,
  _SWRTCCRt,
  0,
  [_CD, _CI, _PI, _PTa],
  [[() => ConnectionData, 0], 0, 0, 0]
);
export var StateTransition = struct(n0, _STtat, 0, [_S, _SST, _SET], [0, 4, 4]);
export var Step = struct(n0, _Step, 0, [_Ex, _Exp, _St], [() => Expiry, () => Expression, 0]);
export var UpdateContactRequest = struct(
  n0,
  _UCRp,
  0,
  [_II, _CI, _N, _D, _Ref, _SAe, _QIu, _UIs, _CEu, _SE],
  [
    [0, 1],
    [0, 1],
    [() => Name, 0],
    [() => Description, 0],
    () => ContactReferences,
    () => SegmentAttributes,
    () => QueueInfoInput,
    () => UserInfo,
    () => Endpoint,
    () => Endpoint,
  ]
);
export var UpdateContactResponse = struct(n0, _UCRpd, 0, [], []);
export var UpdateEmailAddressMetadataRequest = struct(
  n0,
  _UEAMR,
  0,
  [_II, _EAI, _D, _DN, _CT],
  [[0, 1], [0, 1], [() => Description, 0], [() => EmailAddressDisplayName, 0], 0]
);
export var UpdateEmailAddressMetadataResponse = struct(n0, _UEAMRp, 0, [_EAI, _EAA], [0, 0]);
export var UserInfo = struct(n0, _UIs, 0, [_UI], [0]);
export var WisdomInfo = struct(n0, _WI, 0, [_SAes], [0]);
export var EmailAddressList = list(n0, _EAL, 0, [() => EmailAddressMetadata, 0]);
export var EmailAddressSearchConditionList = list(n0, _EASCL, 0, () => EmailAddressSearchCriteria);
export var EmailAttachments = list(n0, _EAmai, 8, () => EmailAttachment);
export var EmailRecipientsList = list(n0, _ERL, 0, () => EmailRecipient);
export var PotentialAudioQualityIssues = 64 | 0;

export var Recordings = list(n0, _Re, 0, () => RecordingInfo);
export var StateTransitions = list(n0, _STt, 0, () => StateTransition);
export var Steps = list(n0, _Ste, 0, () => Step);
export var ContactEvaluations = map(n0, _CEon, 0, 0, () => ContactEvaluation);
export var EmailHeaders = 128 | 0;

export var CreateContact = op(
  n0,
  _CCr,
  {
    [_h]: ["PUT", "/contact/create-contact", 200],
  },
  () => CreateContactRequest,
  () => CreateContactResponse
);
export var CreateEmailAddress = op(
  n0,
  _CEAr,
  {
    [_h]: ["PUT", "/email-addresses/{InstanceId}", 200],
  },
  () => CreateEmailAddressRequest,
  () => CreateEmailAddressResponse
);
export var DescribeContact = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/contacts/{InstanceId}/{ContactId}", 200],
  },
  () => DescribeContactRequest,
  () => DescribeContactResponse
);
export var DescribeEmailAddress = op(
  n0,
  _DEAes,
  {
    [_h]: ["GET", "/email-addresses/{InstanceId}/{EmailAddressId}", 200],
  },
  () => DescribeEmailAddressRequest,
  () => DescribeEmailAddressResponse
);
export var SearchEmailAddresses = op(
  n0,
  _SEAe,
  {
    [_h]: ["POST", "/search-email-addresses", 200],
  },
  () => SearchEmailAddressesRequest,
  () => SearchEmailAddressesResponse
);
export var StartEmailContact = op(
  n0,
  _SEC,
  {
    [_h]: ["PUT", "/contact/email", 200],
  },
  () => StartEmailContactRequest,
  () => StartEmailContactResponse
);
export var StartOutboundVoiceContact = op(
  n0,
  _SOVC,
  {
    [_h]: ["PUT", "/contact/outbound-voice", 200],
  },
  () => StartOutboundVoiceContactRequest,
  () => StartOutboundVoiceContactResponse
);
export var StartTaskContact = op(
  n0,
  _STC,
  {
    [_h]: ["PUT", "/contact/task", 200],
  },
  () => StartTaskContactRequest,
  () => StartTaskContactResponse
);
export var StartWebRTCContact = op(
  n0,
  _SWRTCC,
  {
    [_h]: ["PUT", "/contact/webrtc", 200],
  },
  () => StartWebRTCContactRequest,
  () => StartWebRTCContactResponse
);
export var UpdateContact = op(
  n0,
  _UCp,
  {
    [_h]: ["POST", "/contacts/{InstanceId}/{ContactId}", 200],
  },
  () => UpdateContactRequest,
  () => UpdateContactResponse
);
export var UpdateEmailAddressMetadata = op(
  n0,
  _UEAM,
  {
    [_h]: ["POST", "/email-addresses/{InstanceId}/{EmailAddressId}", 200],
  },
  () => UpdateEmailAddressMetadataRequest,
  () => UpdateEmailAddressMetadataResponse
);
