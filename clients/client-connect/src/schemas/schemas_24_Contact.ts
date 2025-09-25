// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AHGg,
  _AI,
  _AIg,
  _Attr,
  _C,
  _CAo,
  _CDIM,
  _CFCI,
  _CFI,
  _Ch,
  _CI,
  _CINE,
  _CIu,
  _CM,
  _Co,
  _Conta,
  _Cri,
  _CSS,
  _CSSAI,
  _CSSQI,
  _CSSSA,
  _CSSSAV,
  _CT,
  _CTAT,
  _CTo,
  _DE,
  _DT,
  _ETn,
  _ETnd,
  _FNi,
  _h,
  _I,
  _ICI,
  _II,
  _IM,
  _IMn,
  _IMni,
  _ISM,
  _IT,
  _K,
  _LI,
  _LId,
  _LIds,
  _LIds_,
  _LIds__,
  _MRa,
  _MTa,
  _NT,
  _Ord,
  _PCe,
  _PCI,
  _PD,
  _PI,
  _PR,
  _PTa,
  _QIu,
  _QIue,
  _RCI,
  _RTe,
  _SAe,
  _SAV,
  _SAVL,
  _SAVM,
  _SCA,
  _SCAC,
  _SCACL,
  _SCAK,
  _SCAV,
  _SCAVL,
  _SCC,
  _SCCR,
  _SCCRt,
  _SCe,
  _SCea,
  _SCI,
  _SCR,
  _SCRe,
  _SCTR,
  _SEo,
  _SMCT,
  _So,
  _SOCC,
  _SOCCR,
  _SOCCRt,
  _SSA,
  _SSAC,
  _SSACL,
  _SSAK,
  _SSAV,
  _SSAVL,
  _ST,
  _STc,
  _STL,
  _STtar,
  _T,
  _TCL,
  _TCo,
  _TCr,
  _TR,
  _Tr,
  _Va,
  _VAa,
  _VIa,
  _VL,
  _VM,
  _VS,
  n0,
} from "./schemas_0";
import { ParticipantDetails } from "./schemas_3_Contact";
import { Endpoint } from "./schemas_64_Contact";

/* eslint no-var: 0 */

export var CustomerIdNonEmpty = sim(n0, _CINE, 0, 8);
export var SearchableContactAttributeKey = sim(n0, _SCAK, 0, 8);
export var SearchableContactAttributeValue = sim(n0, _SCAV, 0, 8);
export var SearchableSegmentAttributeKey = sim(n0, _SSAK, 0, 8);
export var SearchableSegmentAttributeValue = sim(n0, _SSAV, 0, 8);
export var SearchText = sim(n0, _ST, 0, 8);
export var AgentHierarchyGroups = struct(
  n0,
  _AHGg,
  0,
  [_LI, _LId, _LIds, _LIds_, _LIds__],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ChatMessage = struct(n0, _CM, 0, [_CTo, _Co], [0, 0]);
export var ContactAnalysis = struct(n0, _CAo, 0, [_Tr], [[() => Transcript, 0]]);
export var ContactSearchSummary = struct(
  n0,
  _CSS,
  0,
  [_A, _I, _ICI, _PCI, _IM, _C, _QIu, _AI, _IT, _DT, _STc, _SAe],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ContactSearchSummaryQueueInfo,
    () => ContactSearchSummaryAgentInfo,
    4,
    4,
    4,
    [() => ContactSearchSummarySegmentAttributes, 0],
  ]
);
export var ContactSearchSummaryAgentInfo = struct(n0, _CSSAI, 0, [_I, _CTAT], [0, 4]);
export var ContactSearchSummaryQueueInfo = struct(n0, _CSSQI, 0, [_I, _ETn], [0, 4]);
export var ContactSearchSummarySegmentAttributeValue = struct(n0, _CSSSAV, 0, [_VS], [0]);
export var PersistentChat = struct(n0, _PCe, 0, [_RTe, _SCI], [0, 0]);
export var SearchableContactAttributes = struct(
  n0,
  _SCA,
  0,
  [_Cri, _MTa],
  [[() => SearchableContactAttributesCriteriaList, 0], 0]
);
export var SearchableContactAttributesCriteria = struct(
  n0,
  _SCAC,
  0,
  [_K, _Va],
  [
    [() => SearchableContactAttributeKey, 0],
    [() => SearchableContactAttributeValueList, 0],
  ]
);
export var SearchableSegmentAttributes = struct(
  n0,
  _SSA,
  0,
  [_Cri, _MTa],
  [[() => SearchableSegmentAttributesCriteriaList, 0], 0]
);
export var SearchableSegmentAttributesCriteria = struct(
  n0,
  _SSAC,
  0,
  [_K, _Va],
  [
    [() => SearchableSegmentAttributeKey, 0],
    [() => SearchableSegmentAttributeValueList, 0],
  ]
);
export var SearchContactsRequest = struct(
  n0,
  _SCR,
  0,
  [_II, _TR, _SCe, _MRa, _NT, _So],
  [0, () => SearchContactsTimeRange, [() => SearchCriteria, 0], 1, 0, () => Sort]
);
export var SearchContactsResponse = struct(n0, _SCRe, 0, [_Conta, _NT, _TCo], [[() => Contacts, 0], 0, 1]);
export var SearchContactsTimeRange = struct(n0, _SCTR, 0, [_T, _STtar, _ETnd], [0, 4, 4]);
export var SearchCriteria = struct(
  n0,
  _SCe,
  0,
  [_AIg, _AHGg, _Ch, _CAo, _IMn, _QIue, _SCA, _SSA],
  [
    64 | 0,
    () => AgentHierarchyGroups,
    64 | 0,
    [() => ContactAnalysis, 0],
    64 | 0,
    64 | 0,
    [() => SearchableContactAttributes, 0],
    [() => SearchableSegmentAttributes, 0],
  ]
);
export var SegmentAttributeValue = struct(
  n0,
  _SAV,
  0,
  [_VS, _VM, _VIa, _VL, _VAa],
  [0, () => SegmentAttributeValueMap, 1, () => SegmentAttributeValueList, 0]
);
export var Sort = struct(n0, _So, 0, [_FNi, _Ord], [0, 0]);
export var StartChatContactRequest = struct(
  n0,
  _SCCR,
  0,
  [_II, _CFI, _Attr, _PD, _IMni, _CT, _CDIM, _SMCT, _PCe, _RCI, _SAe, _CIu],
  [
    0,
    0,
    128 | 0,
    () => ParticipantDetails,
    () => ChatMessage,
    [0, 4],
    1,
    64 | 0,
    () => PersistentChat,
    0,
    () => SegmentAttributes,
    [() => CustomerIdNonEmpty, 0],
  ]
);
export var StartChatContactResponse = struct(n0, _SCCRt, 0, [_CI, _PI, _PTa, _CFCI], [0, 0, 0, 0]);
export var StartOutboundChatContactRequest = struct(
  n0,
  _SOCCR,
  0,
  [_SEo, _DE, _II, _SAe, _Attr, _CFI, _CDIM, _PD, _ISM, _RCI, _SMCT, _CT],
  [
    () => Endpoint,
    () => Endpoint,
    0,
    () => SegmentAttributes,
    128 | 0,
    0,
    1,
    () => ParticipantDetails,
    () => ChatMessage,
    0,
    64 | 0,
    [0, 4],
  ]
);
export var StartOutboundChatContactResponse = struct(n0, _SOCCRt, 0, [_CI], [0]);
export var Transcript = struct(n0, _Tr, 0, [_Cri, _MTa], [[() => TranscriptCriteriaList, 0], 0]);
export var TranscriptCriteria = struct(n0, _TCr, 0, [_PR, _ST, _MTa], [0, [() => SearchTextList, 0], 0]);
export var AgentResourceIdList = 64 | 0;

export var ChannelList = 64 | 0;

export var Contacts = list(n0, _Conta, 0, [() => ContactSearchSummary, 0]);
export var HierarchyGroupIdList = 64 | 0;

export var InitiationMethodList = 64 | 0;

export var QueueIdList = 64 | 0;

export var SearchableContactAttributesCriteriaList = list(n0, _SCACL, 0, [
  () => SearchableContactAttributesCriteria,
  0,
]);
export var SearchableContactAttributeValueList = list(n0, _SCAVL, 0, [() => SearchableContactAttributeValue, 0]);
export var SearchableSegmentAttributesCriteriaList = list(n0, _SSACL, 0, [
  () => SearchableSegmentAttributesCriteria,
  0,
]);
export var SearchableSegmentAttributeValueList = list(n0, _SSAVL, 8, [() => SearchableSegmentAttributeValue, 0]);
export var SearchTextList = list(n0, _STL, 0, [() => SearchText, 0]);
export var SegmentAttributeValueList = list(n0, _SAVL, 0, () => SegmentAttributeValue);
export var TranscriptCriteriaList = list(n0, _TCL, 0, [() => TranscriptCriteria, 0]);
export var ContactSearchSummarySegmentAttributes = map(
  n0,
  _CSSSA,
  8,
  0,
  () => ContactSearchSummarySegmentAttributeValue
);
export var SegmentAttributes = map(n0, _SAe, 0, 0, () => SegmentAttributeValue);
export var SegmentAttributeValueMap = map(n0, _SAVM, 0, 0, () => SegmentAttributeValue);
export var SearchContacts = op(
  n0,
  _SCea,
  {
    [_h]: ["POST", "/search-contacts", 200],
  },
  () => SearchContactsRequest,
  () => SearchContactsResponse
);
export var StartChatContact = op(
  n0,
  _SCC,
  {
    [_h]: ["PUT", "/contact/chat", 200],
  },
  () => StartChatContactRequest,
  () => StartChatContactResponse
);
export var StartOutboundChatContact = op(
  n0,
  _SOCC,
  {
    [_h]: ["PUT", "/contact/outbound-chat", 200],
  },
  () => StartOutboundChatContactRequest,
  () => StartOutboundChatContactResponse
);
